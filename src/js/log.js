import path from "path";
export default function(logging_source) {
  const command_name = path.basename(process.argv[1]);
  let source = `${command_name} (${logging_source})`;
  if (logging_source === command_name) {
    source = command_name;
  }
  return function(message) {
    console.log(`[ ${source} ] ${message}`);
  };
}
