var timer = require('./index');

timer.profile('one');
setTimeout(function() {
	timer.profile('one');
}, 1000);

timer.profile('two');
setTimeout(function() {
	timer.profile('two');
}, 2000);