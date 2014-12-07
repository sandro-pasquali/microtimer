#microtimer

A simple high-resolution timing and profiling tool.
##installation
```
npm install microtimer
```
##usage
```
timer.set('foo');
setTimeout(function() {
	timer.get('foo');
	//	Set logger to a function
	timer.setLogger(function(name, ns, str) {
		console.log("Timer:" + name + " second timeout: " + (ns / 1e6) + "ms");
	})
}, 1000);

setTimeout(function() {
	timer.get('foo');
	//	Clears 'foo' timer
	timer.clear('foo');
},3000);
// Timer:foo 1002238412ns
// Timer:foo second timeout 3002.888295ms
```

