


/* Making own for.Each */

var colors = ["red", "orange", "yellow"];

function myForEach(arr, func) {
	for(var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

myForEach(colors, alert);

myForEach(colors, function(){alert("hi")})

myForEach(colors, function(color){
	console.log(color);
});

var friends = ["dave", "charlie", "hads"]

Array.prototype.myForEach = function(func){
	for(var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

friends.myForEach(function(name) {
	console.log("i love " + name );
})


/*myForEach(arr, function(num) {
	console.log(num);
});*/


/*var nums = [45,65,77,34]

nums.forEach(function(num) {
	console.log(num);
});*/

/*FIRST PROBLEM*/
function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]); 
	}
}

printReverse([3,6,2,5]);


/*SECOND PROBLEM*/

function isUniform (arr) {
	var first = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== first) {
			return false
		}
	}
		return true;
}

/*THIRD PROBLEM*/

function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}

/*FORTH PROBLEM*/

function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	} return max;
}



/*function logNums(el, i, but) {
  console.log(el, i, but);
}
 
[1, 2, 3].forEach(logNums);



/*Exercises*/
/*var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(even) {
	if(even % 2 === 0) {
		console.log(even);
	}
});*/

/*var numbers = [1,2,3,4,5,6,7,8,9,10];

for(var i = 1; i < numbers.length; i++) {
	if(i % 3 === 0 ) {
		console.log([i]);
	}
}*/

/*var count = 0;
while(count < colors.lenght) {
	console.log(colors[count]);
	count++;
}*/





/*FOR LOOP
*//*var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
	alert(colors[i]);
}
*/


/*forEACH*/
/*var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color) {
	console.log(color);
});*/


