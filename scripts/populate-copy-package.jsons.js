const fsp = require("fs/promises");
const fs = require("fs");
const path = require("path");

const cacheDockerFilePath = path.resolve(__dirname, "..", "Dockerfile");

const exec = async () => {
  const packagesPath = path.resolve(__dirname, "..", "packages");
  const packages = await fsp.opendir(packagesPath);

  const paths = [];
  // see the note below
  // const nodeModulesPaths = [];

  try {
    for await (const dirent of packages) {
      const packageJsonPath = path.join(
        packagesPath,
        dirent.name,
        "package.json"
      );
      // const nodeModulesPath = path.join(
      //   packagesPath,
      //   dirent.name,
      //   "node_modules"
      // );

      if (fs.existsSync(packageJsonPath)) {
        paths.push(`packages/${dirent.name}/package.json`);
      }

      // if (fs.existsSync(nodeModulesPath)) {
      //   nodeModulesPaths.push(`packages/${dirent.name}/node_modules`);
      // }
    }

    const source = (await fsp.readFile(cacheDockerFilePath, "utf8")).split(
      "\n"
    );
    const firstInstallLine = source.indexOf(
      "# Copy individual package.json (auto-generated)"
    );
    const lastInstallLine = source.indexOf(
      "# Copy individual package.json (end)"
    );
    const installBeginning =
      source.slice(0, firstInstallLine + 1).join("\n") + "\n";
    const installEnding = source.slice(lastInstallLine).join("\n");

    const dockerFile =
      installBeginning +
      paths
        .sort()
        .map((packageJsonPath) => {
          const finalDir = path.dirname(packageJsonPath);

          return `COPY ${packageJsonPath} ${finalDir}/`;
        })
        .join("\n") +
      "\n" +
      installEnding;

    // at first, it seemed like the following was necessary, but upon inspection,
    // none of the nested node_modules that I see locally exist in the docker image,
    // so this is here just in case there was a problem for future reference, but it
    // didn't seem to be needed at all

    // const installDockerFile = dockerFile.split("\n");
    // const firstMergeLine = installDockerfile.indexOf(
    //   "# Copy the node_modules cache over (auto-generated)"
    // );
    // const lastMergeLine = installDockerfile.indexOf(
    //   "# Copy the node_modules cache over (end)"
    // );
    // const mergeBeginning =
    //   installDockerfile.slice(0, firstMergeLine + 1).join("\n") + "\n";
    // const mergeEnding = installDockerfile.slice(lastMergeLine).join("\n");

    // const dockerFile =
    //   mergeBeginning +
    //   nodeModulesPaths
    //     .sort()
    //     .map((nodeModulesPath) => {
    //       return `COPY --from=cache /source/${nodeModulesPath}/ ./${nodeModulesPath}/`;
    //     })
    //     .join("\n") +
    //   "\n" +
    //   mergeEnding;

    await fsp.writeFile(cacheDockerFilePath, dockerFile, "utf8");
  } catch (e) {
    console.error(e);
  }
};

exec();
