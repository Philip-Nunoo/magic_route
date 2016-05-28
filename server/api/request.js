import { Api } from './_api.js';
import { check } from 'meteor/check';

Api.addRoute('user/request', {authRequired: false}, {
    get: function () {
        
        
        return {success: true};
    }
});