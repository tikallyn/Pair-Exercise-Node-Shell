let request = require("request");

module.exports = function (url, done) {
  request(url, (err, response, body) => {
    if (err) {
      done("Something went wrong");
    } else {
      done(body);
    }
  });
};
