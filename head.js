const fs = require("fs");

module.exports = function (files, done) {
  const arrOfFiles = files.split(" ");

  let output = "hi";

  arrOfFiles.forEach((file) => {
    fs.readFile("./" + file, (err, data) => {
      // done("we are in the read file");
      // done(file);
      // done(data);
      if (err) {
        // done("error");
        output.concat("error");
      } else {
        output += `${typeof data}`;
        output += `==> ${file} <==\n`;
        output += data.split("\n").slice(0, 10).join("\n");
        output += "\n\n";
      }
    });
  });

  done(output);
};
