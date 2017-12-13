var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?")


while(input !== "quit") {
	if(input === "list") {
		listTodos();
} else if (input === "new") {
		addTodo();
} else if(input === "delete") {
		deleteTodo();
} 
	input = prompt("What would you like to do?");
}

console.log("OK, You Quit The App");

function listTodos() {
	console.log("********");
		todos.forEach(function(todo, i){
			console.log(i + ":" + todo);
		});
		console.log("********");
}

function addTodo() {
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
	var index = prompt("Enter indes of todo to delete");
	todos.splice(index,1);
	console.log("Deleted Todo");
}


/*var numbers = [22, 67, 33, 96, 88];

console.log(numbers[numbers.length])*/

/*var friendGroups = [
	[1, 2, 3],
	[4, 5, 6],
	["name", "name1", "name2"]
];

console.log(friendGroups[2][0]);*/