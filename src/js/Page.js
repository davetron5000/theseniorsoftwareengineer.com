import path from "path";
import logger from "./log";

const log = logger(path.basename(__filename));

export default class Page {
  constructor(pages_root, path_to_page_source) {
    this.path_to_page_source = path_to_page_source;
    this.output_file_name = path_to_page_source.replace(pages_root,"").replace(/\.jsx$/,"");
  }

  // Returns a matcher to determine if a given file is a page or not
  static matcher() {
    return function(file) {
      if (file.match(/\.html\.jsx$/)) {
        return true;
      } else {
        log(`${file} is not a .jsx. Ignoring...`);
        return false;
      }
    };
  }

  // Returns a function that will create new pages in the given path.  This
  // allows you to specify the pages path only once
  static factory({ pages_root }) {
    return function(file) {
      return new Page(pages_root, file);
    };
  }

  // Configure how instances of this class look in stringified output
  get [Symbol.toStringTag]() {
    return `{ Page path_to_page_source=${
      this.path_to_page_source
    } output_file_name=${this.output_file_name} }`;
  }
}
