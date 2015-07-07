var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();




function get(username, password, callback) {
  url = "https://api.github.com/notifications"
  xhr.open("GET", url, true, username, password);
  xhr.send();
  xhr.onreadystatechange = function() {

    if (this.readyState === 4) {
    var responseObj = JSON.parse(this.responseText);

      callback(responseObj);
  }
};

}

module.exports = {
  get: get

};


 

