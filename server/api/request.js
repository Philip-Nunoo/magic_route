import { Api } from './_api.js';
import { check } from 'meteor/check';

Api.addRoute('user/request', {authRequired: false}, {
    post: function () {
        doc = this.bodyParams;
        Requests.insert(doc);

        let string = "get me /routes"
		// let string = "from:sdsdasd to:sds ."
        let resp = processMessage(string)
        // send sms to number

        return {success: true};
    }
});

function processMessage (string) {
	let routesRegExp = /\/routes/;

 	if(routesRegExp.test(string)){
 		return Terminals.find().fetch();
 	}
 	let fromToRegExp = /^.*?\bfrom\b.*?\bto\b.*?$/m;

 	if(fromToRegExp.test(string)){
 		return "Destination";
 	}

 	return "Non matched Try again";
}
function registerUser (user) {
	 // body...  
}

function get (argument) {
	 // body...  
}

/*
 * functions
 * 1. Get Routes
 * 2. Get From and to
 * 3. Fare
 */

function getFare (from_terminal, to_terminal) {
	check(from_terminal, String);
	check(to_terminal, String);
	let query = {
		from_terminal: from_terminal,
		to_terminal: to_terminal
	};
	let route = Routes.findOne(query)
	return route? route.fare : '0';	 
}