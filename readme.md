#Github Notification for Node
A node.js module for getting the Github notifications of a user

##Example 

javascript...

github.get(GITHUB_USERNAME, PASSWORD, function(res) {
	console.log(res); //retrieves the unread notifications in JSON format
	
});

...