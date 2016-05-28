import { Meteor } from 'meteor/meteor';

function populateRoutes (argument) {
	if (Routes.find().length <= 0){

	}
}
Meteor.startup(() => {
	populateRoutes()
});


Meteor.methods({
	parseUpload( data ) {
		check( data, Array );

		for ( let i = 0; i < data.length; i++ ) {
			let item   = data[ i ];
			let exists = Routes.findOne( { from_terminal: item.from_terminal, to_terminal: item.to_terminal } );
			let terminalExists = Terminals.findOne( { name: item.from_terminal } );

			if ( !terminalExists ){
				Terminals.insert({name: item.from_terminal});
			}
			if ( !exists ) {
				Routes.insert( item );
			}
		}
	}
});