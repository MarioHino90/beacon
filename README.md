# Beacon: the Braze component library

[![Build status](https://badge.buildkite.com/f5c8f03f23bd44c4122f4f754f1db91b75471ab7f2e280bd50.svg)](https://buildkite.com/braze/branch-beacon)

A library of UI components that implement the [Beacon Product System](https://confluence.braze.com/display/DASHINFRA/Beacon+Product+System) written in and for React.

See [The public Beacon Storybook](https://beacon-storybook.braze.com) for the latest documentation of components in this library.

## Getting started ✨

### First-time users read this 👇

If you have not done so already, you must gain access to the `@braze` private scope on NPM. The steps to do can be found [here](https://confluence.braze.com/display/DASHINFRA/NPM+at+Braze).

Once you are able to see the [`@braze/beacon-core` package via the NPM website](https://www.npmjs.com/package/@braze/beacon-core), you will be able to install the dependencies locally. To do so, run:

```bash
npm login
```

> Note that this is the **ONLY** time you should be running any `npm` commands via the CLI when working with Beacon ([why?](#why-do-i-have-to-use-npm-login-instead-of-yarn-login)); after you are logged in successfully, you **MUST** use `yarn` for all future actions to avoid having compatibility issues.

### Adding the Beacon library to your project dependencies 📚

The following command will add the latest version of the library to your application:

```bash
yarn add @braze/beacon-core
```

Additionally, you may choose to install/upgrade the following to get access to more of what Beacon has to offer to simplify your dev workflow:

```bash
yarn add @braze/beacon-commons
```

You will also need to add styled-components to your application, since it is a peer dependency of the library:

```bash
yarn add styled-components
```

### To use components from the library 🚀

In your React components:

```tsx
import { Component } from "@braze/beacon-core";
```

## What is going on in this library? 🤔

For a statement of values and purpose, please refer to the [project philosophy page](PHILOSOPHY.md).

## To contribute 🛠

Please read the [contribution guidelines](https://beacon-storybook.braze.com/?path=/story/welcome-contributing-overview--page) before proceeding.

## FAQs ❓

### Why do I have to use `npm login` instead of `yarn login`?

Per the [`yarn login` documentation](https://classic.yarnpkg.com/en/docs/cli/login/):

> Running this command will prompt you for your username and email for the npm registry. It will **not** ask for your password. Later when you run a command that requires authentication such as yarn publish, you will have to enter your password to do so.

However, our use case requires the password to be entered when logging in to gain access to private repositories, which is a feature `NPM` offers. As a result, the login step must be performed via `npm login`. `yarn` later uses this login information when you run commands like `yarn` or `yarn add`.

### Why did you choose `yarn` over `npm`?

There are many benefits of `yarn` over `npm` that specifically work for the Beacon repository use case and more generally.

The most significant reason we chose `yarn` was because it offers a feature called [`workspaces`](https://classic.yarnpkg.com/en/docs/workspaces/), which allows projects with multiple packages (like Beacon, which is a monorepo that uses [lerna](https://github.com/lerna/lerna)) to link and install all the dependencies together at the root level of the project. This allows `yarn` to better optimize dependency management, generate a single `yarn.lock` file at the root, install most external dependencies at a root-level `node_modules`, and allow developers to make changes to the various packages and immediately have access to those changes without having to muck around with things like `yarn link`.

Additionally, `yarn` has other smaller benefits over `npm`, such as:

- Better caching that results in faster reinstalls (try running `npm install` 3 times; now do `yarn` 3 times-- sweet, right?), which is useful when switching between branches with different dependencies
- Autocleaning that allows for the automatic deletion of sub-dependencies you may not _actually_ need via the `.yarnclean` file (case in point: `@types/react-native` is a dependency of `@types/styled-components` but is known to cause issues in web React projects; so `.yarnclean` allows us to automatically get rid of it after every installation)
- Pinned version resolutions, which can make working with sub-dependencies easier, especially if certain dependencies are not maintained as frequently
