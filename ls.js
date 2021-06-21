const fs = require("fs");
module.exports = function (done) {
  return fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done("Something went wrong");
    } else {
      done("\n" + files.join("\n"));
    }
  });
};
