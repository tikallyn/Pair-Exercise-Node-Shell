const fs = require("fs");

module.exports = function (files) {
  const arrOfFiles = files.split(" ");

  arrOfFiles.forEach((file) => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
        if (err) {
          process.stdout.write('error')
        } else {
          process.stdout.write(data + '\n')
        }
      })
    })
    setTimeout(function() {
      process.stdout.write("\nprompt > ")
  }, 500);
  
};
