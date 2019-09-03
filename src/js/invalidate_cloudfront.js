const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");

const htmlPath = path.join(__dirname, "..", "..", "production");

const htmlFiles = fs
  .readdirSync(htmlPath)
  .filter(function(file) {
    const extension = path.extname(file);
    return extension === ".html";
  })
  .map(function(file) {
    return `/${file}`;
  });

const distrbution_id = "E3AA1Y61JR4AGJ";

const command = `aws cloudfront create-invalidation --profile=personal --distribution=${distrbution_id} --paths ${htmlFiles.join(
  " "
)}`;

childProcess.exec(command, function(error, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
});
