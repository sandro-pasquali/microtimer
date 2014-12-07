var util = require('util');

module.exports = {
	keys : {},
	printf : "Timer:%s %dns",
	logger : function(name, ns, outStr) {
		console.info(outStr);
	},
	set : function(name) {
		if(Object.keys(this.keys).length > 50) {
			return console.warn('More than 50 timers are in flight. No more will be added. Try #clear.');
		}
		this.keys[name] = process.hrtime();
	},
	get : function(name) {
		var hr;
		var ms;
		if(this.keys[name]) {
			hr = process.hrtime(this.keys[name]);
			ns = hr[0] * 1e9 + hr[1];
			return this.logger(name, ns, util.format(this.printf, name, ns));
		}
		throw new Error('Non-existent timer id passed to #get. Received: ' + name);
	},
	clear : function(key) {
		if(key) {
			delete this.keys[key];
		} else {
			this.keys = {};
		}
	},
	setFormatting : function(str) {
		if(typeof str !== 'string') {
			throw new Error('Must send a String to #setFormatting. Received: ' + str);
		}
		this.printf = str;
	},
	setLogger : function(logF) {
		if(typeof logF === "function") {
			this.logger = logF;
		}
	}
}

