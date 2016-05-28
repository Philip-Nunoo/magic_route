import { Api } from './_api.js';
import { check } from 'meteor/check';

Api.addRoute('user/request', {authRequired: false}, {
    post: function () {
        doc = this.bodyParams;
        Requests.insert(doc);

        
        return {success: true};
    }
});

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
	let fare = 0;	 
}