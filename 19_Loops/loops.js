const newKeyword = "new";
const listKeyword = "list";
const deleteKeyword = "delete";
const quitKeyword = "quit";

const todoList = [];

let command  = prompt("What would you like to do?");


while(true){

    if(command === newKeyword){
        let newTodo = prompt("What would you like to add?");
        todoList.push(newTodo);
        console.log(`${newTodo} is added`);
    }
    else if (command === listKeyword) {
        let idx = 0;
        console.log("**************")
        
        todoList.forEach(todo => {
            console.log(`${idx} : ${todo}`);
            idx++;
        })
        
        console.log("**************")
    } else if(command === deleteKeyword){
        let msgIdx = parseInt(prompt("Enter the ID to delete:"));
        if(msgIdx < todoList.length){
            todoList.splice(msgIdx,1);
        }
    }
    else if(command === quitKeyword){
        break;
    }
    command = prompt("What would you like to do?");
}


console.log("OK, You quit the app!")