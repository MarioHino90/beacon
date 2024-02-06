########################################################
################### BASE NODE LAYER ####################
########################################################
FROM node:16 AS base

# Install the yarn version we use
# The following code is extracted from the Dockerfile for node
# see: https://github.com/nodejs/docker-node/blob/87e7f479d60757f3df6e3b308b5c384ac3c487aa/14/stretch/Dockerfile#L47

COPY package.json .

# enable pinned yarn version
RUN corepack enable \
  && yarn --version

# install puppeteer dependencies
RUN apt-get update && \
  apt-get -y install xvfb gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 \
  libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 \
  libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 \
  libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 \
  libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget && \
  rm -rf /var/lib/apt/lists/*

# install lerna globally
RUN yarn global add lerna @storybook/cli puppeteer-core

########################################################
############## CACHE YARN INSTALL LAYER ################
########################################################
FROM base AS yarn-install

# Create a working directory
WORKDIR /source/

COPY package.json yarn.lock lerna.json .yarnrc ./
COPY scripts/ ./scripts/
# Copy individual package.json (auto-generated)
COPY packages/commons/package.json packages/commons/
COPY packages/core/package.json packages/core/
COPY packages/cypress-helpers/package.json packages/cypress-helpers/
COPY packages/hooks/package.json packages/hooks/
COPY packages/i18n-dev/package.json packages/i18n-dev/
COPY packages/storybook/package.json packages/storybook/
COPY packages/test-utils/package.json packages/test-utils/
COPY packages/translations/package.json packages/translations/
# Copy individual package.json (end)

# Set up arg for npm config
ARG NPM_TOKEN

# Set npm and git configs
RUN npm config set "//registry.npmjs.org/:_authToken" ${NPM_TOKEN} \
  && git config --global user.email "beacon@braze.com" \
  && git config --global user.name "Beacon CI"

# Run yarn and install all dependencies
RUN lerna bootstrap -- --frozen-lockfile

########################################################
###################### BUILD LAYER #####################
########################################################
FROM yarn-install AS test

# Get to source code directory for beacon
WORKDIR /source/

# Set up arg for npm config
ARG NPM_TOKEN

# Copy the beacon source into the image
COPY . .

COPY --from=yarn-install /source/node_modules/ ./node_modules/

# Build and compile all packages
RUN yarn build

########################################################
#################### PUBLISH LAYER #####################
########################################################
FROM test AS build

# Build storybook
RUN cd ./packages/storybook \
  && yarn build-storybook \ 
  && sb extract

########################################################
##################### RELEASE LAYER ####################
########################################################
FROM nginx:alpine AS release

# Copy the nginx conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the existing build from the previous stage
COPY --from=build /source/packages/storybook/storybook-static /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Create an entrypoint
ENTRYPOINT ["nginx","-g","daemon off;"]
