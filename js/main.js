require.config({
	paths: {
		text: '../lib/text',
		json: '../lib/json',
	}
})

require(['util'], function(datum) {
	Object.keys(datum).forEach(function(key) {
		console.log(key);
		console.log(datum[key]);
	})
})