require("@babel/register")({
  presets: ["@babel/preset-react"],
  plugins: ["transform-es2015-modules-commonjs"]
});

const path = require("path");
const fs = require("fs");
const render = require("./render").default;
const log = require("./log").default(path.basename(process.argv[1]));

const source_path = path.join(__dirname, "..", "..", "site");
const output_path = path.join(__dirname, "..", "..", "site", "rendered_html");

log(`source_path is '${source_path}'`);
log(`output_path is '${output_path}'`);

fs.mkdirSync(output_path, { recursive: true });

const build = function() {
  log("Rendering");
  render({
    source_path: source_path,
    output_path: output_path
  });
};

build();
if (process.argv[2] == "--watch") {
  log("Watching for changes and re-building when so");
  fs.watch(
    source_path,
    {
      persistent: true,
      recursive: true
    },
    function(eventType, filename) {
      if (filename.startsWith(".") || filename.endsWith("~")) {
        // do not log - too noisy
      } else if (filename.startsWith("rendered_html")) {
        log(`Ignoring ${filename}`);
      } else {
        log(`File ${filename} changed.  Rebuilding...`);
        build();
      }
    }
  );
} else {
  log("Not watching");
}
