module.exports = {
	keys : {},
	printf : "Execution time: %ds %dms",
	profile : function(name) {
		var end;
		if(this.keys[name]) {
			end = process.hrtime(this.keys[name]);
			console.info(this.printf, end[0], end[1] / 1000000);
			delete this.keys[name];
			return;
		}
		if(Object.keys(this.keys).length > 50) {
			return console.warn('More than 50 profiles are in flight. No more will be added. Probably some are not being completed.');
		}
		this.keys[name] = process.hrtime();
	},
	setStringFormat : function(str) {
		if(typeof str !== 'string') {
			return console.error('Must send a String to microtimer.setStringFormat(). Received: ' + str);
		}
		this.printf = str;
	},
	clearProfilers : function() {
		this.keys = {};
	}
}

