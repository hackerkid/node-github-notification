var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

function get(username, password, callback) {
  var url = "https://api.github.com/notifications";
  xhr.open("GET", url, true, username, password);
  xhr.onreadystatechange = function() {
    var error, responseObj; 

    if (this.readyState === 4) {

      try {
        responseObj = JSON.parse(this.responseText);
      } catch(err) {
        error = err;
      }

      if(/^[45]\d\d/.test(this.status))
        error = new Error(this.status + ": " + this.statusText)

      callback(error, responseObj);
    }
  };
  xhr.send(); 
}

module.exports = {
  get: get
};
