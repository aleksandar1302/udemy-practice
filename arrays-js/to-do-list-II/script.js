var todos = ["Buy New Turtle"];
var input = prompt("What would you want to do?");


while(input!=="quit"){
    if(input==="list"){
        listTodos();
    }
    else if(input==="new"){
        addTodo();    
    }
    else if(input==="delete"){
        deleteTodo();
    }
    input = prompt("What would you want to do?");
}
console.log("QUIT THE APP");

function listTodos(){
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i+ ": " + todo);
        });
    console.log("**********");
}

function addTodo(){
    var newToDo = prompt("Enter new Todo");
    todos.push(newToDo);
    console.log("Added Todo");
}

function deleteTodo(){
    var delTodo = prompt("Enter the index of Todo");
    todos.splice(delTodo, 1);
    console.log("Deleted Todo");
}