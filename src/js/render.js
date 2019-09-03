import path from "path";
import fs from "fs";

import logger from "./log";
import Page from "./Page";
import Renderer from "./Renderer";

const log = logger(path.basename(__filename));

const getPagesInPath = (dir) => {
  const files = fs.readdirSync(dir);
  return files.map( (file) => {
    log(`Checking ${file} from ${dir}`);
    if (fs.lstatSync(path.join(dir,file)).isDirectory()) {
      log(`It's a directory`);
      return getPagesInPath(path.join(dir,file));
    }
    else {
      log(`It's a file`);
      return path.join(dir,file);
    }
  }).flat(1);
}
export default function({ source_path, output_path }) {
  log(`Rendering from ${source_path} to ${output_path}`);

  const pages_path = path.join(source_path, "pages");
  const all_files = [];

  all_files.unshift(fs.readdirSync(pages_path))
  const pages = getPagesInPath(pages_path)
    .filter(Page.matcher())
    .map(Page.factory({ pages_root: pages_path }));
  const renderer = new Renderer({ output_path: output_path });
  const render_function = renderer.render_to_file.bind(renderer);

  pages.forEach(render_function);
}
