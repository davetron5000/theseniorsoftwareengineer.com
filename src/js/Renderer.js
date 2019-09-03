import React from "react";
import ReactDOMServer from "react-dom/server";
import path from "path";
import fs from "fs";
import logger from "./log";

const log = logger(path.basename(__filename));

export default class Renderer {
  constructor({ output_path }) {
    this.output_path = output_path;
  }

  // Renders the given Page object to the output path
  render_to_file(page) {
    const output_file = path.join(this.output_path, page.output_file_name);
    const output_path = path.dirname(output_file);

    log(`Rendering ${page} to ${output_file}`);
    if (fs.existsSync(output_path)) {
      log(`Output dir ${path.dirname(output_file)} exists`);
    }
    else {
      log(`Output dir ${path.dirname(output_file)} DOES NOT exist.  Creating...`);
      fs.mkdirSync(path.dirname(output_file, { recursive: true }));
    }

    delete require.cache[require.resolve(page.path_to_page_source)];
    const component = require(page.path_to_page_source).default;

    fs.writeFileSync(
      output_file,
      "<!DOCTYPE html>" +
        ReactDOMServer.renderToStaticMarkup(React.createElement(component, {}))
    );
  }
}
