const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");

const log = (message) => {
  console.log(`[WEBPACK (html_files.js) ]: ${message}`);
}

const getPluginForPagesInPath = (plugin_config, dir, subdir) => {
  const files = fs.readdirSync(dir);
  if (!subdir) {
    subdir = "";
  }

  return files.map( (file) => {
    const pathToFile = path.join(dir,file);
    const fileIsDirectory = fs.lstatSync(pathToFile).isDirectory();

    log(`file = ${file}`);
    log(`pathToFile = ${pathToFile}`);
    log(`fileIsDirectory = ${fileIsDirectory}`);

    if (fileIsDirectory) {
      const newSubdir = path.join(subdir, path.basename(pathToFile));
      log(`newSubdir = ${newSubdir}`);
      return getPluginForPagesInPath(plugin_config,pathToFile,newSubdir);
    }
    else {
      if (path.extname(file) === ".html") {
        const template = path.join("./site/rendered_html", subdir, file);
        const destinationFile = path.join(subdir, file);
        const publishDate = (new Date()).toLocaleDateString(
          "en-US",
          { month: "short", day: "numeric", year: "numeric" }
        );

        log(`Making plugin: ${template} into ${destinationFile}`)

        return new HtmlPlugin(
          Object.assign(
            plugin_config,
            {
              template: template,
              publishDate: publishDate,
              filename: destinationFile
            }
          )
        );
      }
    }
  }).flat(1);
}
module.exports = function(plugin_config) {
  return getPluginForPagesInPath(plugin_config, path.join(__dirname,"..","site","rendered_html"));
}
