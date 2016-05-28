import { Meteor } from 'meteor/meteor';

function populateRoutes (argument) {
	if (Routes.find().length <= 0){

	}
}
Meteor.startup(() => {
  // code to run on server at 
  populateRoutes()
});


Meteor.methods({
	parseUpload( data ) {
		check( data, Array );

		for ( let i = 0; i < data.length; i++ ) {
			let item   = data[ i ],
          		exists = Routes.findOne( { from_terminal: item.from_terminal, to_terminal: item.to_terminal } );

          	if ( !exists ) {
          		Routes.insert( item );
          	} else {
          		console.warn( 'Rejected. This item already exists.' );
          	}
          }
      }
  });