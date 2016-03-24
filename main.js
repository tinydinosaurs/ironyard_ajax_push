console.log('hi');

var myMovies = [
	{
		title: 'The Exorcist',
		year: 1973,
		description: 'Mental illness is actually possession by the Devil himself.'
	},
	{
		title: 'Rosemary\'s Baby',
		year: 1968,
		description: 'Pregnancy is actually the creation of the Devil himself.'
	}

];





myMovies.forEach(function(movie) {
	$.ajax(
		 {
	url: 'http://small-tiyfe.herokuapp.com/collections/danas_movies',
	type: 'POST',
	data: movie,
	dataType: 'json',
	success: function(data) {
	},
	error: function(error) {
		console.log('something went terribly wrong');
	},
	complete: function() {
		console.log('we\'re done here')
	}

		});
	console.log(movie, myMovies);
});