var comments = {};

comments.data = ["Good Job", "Bye", "Lame..."];


function print(arr) {
	arr.forEach(function(el){
		console.log(el);
	});
}

/* Share Data in array with THIS - Method */
comments.print = function() {
	this.data.forEach(function(el){
		console.log(el);
	});
}


function speak() {
	return "WOOF!";
}

var catSpace = {};
var dogSpace = {};

dogSpace.speak = function() {
	return "WOOF!";
}

catSpace.speak = function() {
	return "MEOW!";
}



var movies = [
	{
	movie: "GoodFellas",
	watched: true,
	rating: 5
	},
	{
	movie: "Frozen",
	watched: false,
	rating: 2
	},
	{
	movie: "The Room",
	watched: true,
	rating: 0.01
	},
	{
	movie: "Any Type of Musical",
	watched: false,
	rating: 1
	}
]

movies.forEach(function(movie) {
	var result = "You have ";
	if(movie.watched = true) {
	result += "seen ";
	} else {
	result += "not seen ";
	}
	result += "\"" + movie.movie + "\" - ";
	result += movie.rating + " stars";
	console.log(result)
})


/* A FUNCTION OPTION */

/*movies.forEach(function(movie) {
	console.log(buildString(movie));
	});


function buildString(movie) {
	var result = "You have ";
	if(movie.watched = true) {
	result += "seen ";
	} else {
	result += "not seen ";
	}
	result += "\"" + movie.movie + "\" - ";
	result += movie.rating + " stars";
	return result;
}*/



/* The OTHER way that almost worked*/
/*var	movieDB: [
	{movie: " GoodFellas", watched: "seen", rating: "5 Stars"},
	{movie: " Frozen", watched: "not seen", rating: "4.5 Stars"},
	{movie: " The Room", watched: "not seen", rating: "0.01 Stars"},
	{movie: " Any Type of Musical", watched: "seen", rating: "What Stars?"}
	],
};]

function movieResult() {
	for(var i = 0; i < movieDB.movies.length; i++) {
	console.log("I have " + movieDB.movies[0].watched + movieDB.movies[0].movie+ " - " + movieDB.movies[0].rating)
}
}*/




/*var someObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Crabbe"},
		{name: "Goyle"}
	],
	color: "baby blue",
	isEvil: true
};

someObject.friends[0].name*/



/*var posts = [*/
	/*{*/ /*this is an object*/
		/*title: "cats are mediocre",
		author: "Colt",
		comments: ["Awesome post", "this sucks"]
	},
	{
		title: "cats are actually awesome",
		author: "cat man",
		comments: ["<3", "go to hades!"]
	}
]

console.log(posts[0].title)
console.log(posts[1].comments[1])*/



/*var person = {
	name: "Cindy",
	age: 32,
	city: "Missoula"
};

console.log(person.name);*/