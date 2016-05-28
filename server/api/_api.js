import { Restivus } from 'meteor/nimble:restivus'; 

export const Api = new Restivus({
    useDefaultAuth: false,
    prettyJson: true
});
