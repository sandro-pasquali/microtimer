#microtimer

A simple high-resolution timing and profiling tool.
##installation
```
npm install microtimer
```
##usage
```
var timer = require('microtimer');
timer.profile('myTimer');
function() {
	//	Do something 
}
timer.profile('myTimer');
//	console > ⓘ Execution time: 0s 2.90755ms
```
