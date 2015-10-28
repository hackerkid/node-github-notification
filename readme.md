#Github Notification for Node
> A node.js module for getting the unread Github notifications of a user

## Install

```
$ npm install github-notification
```

## Usage 

```javascript

var github = require("github-notification");

github.get(GITHUB_USERNAME, PASSWORD, function(err, res) {
	console.log(res); //retrieves the unread notifications in JSON format
	
});

```
## License

MIT © [Vishnu Ks](http://github.com/hackerkid)