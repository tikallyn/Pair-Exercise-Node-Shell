const fs = require("fs");

module.exports = function (files) {
  const arrOfFiles = files.split(" ");

  arrOfFiles.forEach((file) => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
        if (err) {
          process.stdout.write('error')
        } else {
          process.stdout.write(`\n==> ${file} <==\n`)
          process.stdout.write(data.split("\n").slice(-10).join("\n"))
        }
      })
    })
    setTimeout(function() {
      process.stdout.write("\nprompt > ")
  }, 500);
  
};
