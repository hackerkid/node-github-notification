var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

function get(username, password, callback) {
  var url = "https://api.github.com/notifications"; // remember var or we create a global variable
  xhr.open("GET", url, true, username, password);
  xhr.onreadystatechange = function() {
    var error, responseObj; // moving variable declaration to the top of the function as js variables are always hoisted to here anyway

    if (this.readyState === 4) {

      try {
        responseObj = JSON.parse(this.responseText);
      } catch(err) { // The JSON was malformed
        error = err;
      }

      if(/^[45]\d\d/.test(this.status)) // Test if the server gives us 400 or 500 errors, see https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        error = new Error(this.status + ": " + this.statusText)

      callback(error, responseObj);
    }
  };
  xhr.send(); // moved to bottom to avoid race condition (onreadystatechange could be called before we are listening)
}

module.exports = {
  get: get
};
