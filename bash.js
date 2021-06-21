const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");
const date = require("./date");
const echo = require("./echo");
const head = require("./head");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd.slice(0, 3) === "cat") {
    cat(cmd.slice(4), done);
  } else if (cmd.slice(0, 4) === "curl") {
    curl(cmd.slice(5), done);
  } else if (cmd === "date") {
    date(done);
  } else if (cmd.slice(0, 4) === "echo") {
    echo(cmd.slice(5), done);
  } else if (cmd.slice(0, 4) === "head") {
    head(cmd.slice(5), done);
  } else {
    process.stdout.write("You entered: " + cmd);
  }
});
