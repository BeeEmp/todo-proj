// 1. Use the textarea tag selector (This was already correct)
const textarea = document.querySelector('textarea');

// 2. Use # for ID (This fixes the "addBtn is null" error)
const addBtn = document.querySelector('.addBtn');

// 3. Use . for Class (Make sure you fix the HTML typo mentioned above!)
const todoContainer = document.querySelector('.todoContainer');

let todoList = []

function intialLoad(){
    if (!localStorage.getItem('todos')){return }
    todoList = JSON.parse(localStorage.getItem('todos')).todoList
    updateUI()
}

intialLoad()

function addTodo() {
    const todo = textarea.value
    if (!todo) { return };
   
    console.log('Adding todo:', todo);
    todoList.push(todo)
    textarea.value = '' //resets to empty
    updateUI()
}   

function editTodo(index){
    textarea.value = todoList[index]
    todoList = todoList.filter((element, elementIndex) => {
        if (index === elementIndex) {return false  }
        return true})
        updateUI()
}
function deleteTodo(index)
    {
        
        todoList= todoList.filter((element, elementIndex) => {
        if (index === elementIndex) {return false  }
        return true})
        updateUI()
    }


function updateUI() 
{
    // 1. Initialize a string to hold the new HTML
    let newInnerHTML = '';

    todoList.forEach((todoElement, todoIndex) => {
        // 2. Use BACKTICKS (`) for multi-line strings and ${} variables
        newInnerHTML += `
        <div class="todo">
            <p>${todoElement}</p>
            <div class="BtnContainer">
                <button class="iconBtn" onclick="editTodo (${todoIndex})"> 
                    <i class="fa-solid fa-pen-to-square"></i> 
                </button>
                <button class="iconBtn" onclick="deleteTodo (${todoIndex})"> 
                    <i class="fa-solid fa-delete-left"></i> 
                </button>
            </div> 
        </div>
        `
    })
    todoContainer.innerHTML = newInnerHTML;

    localStorage.setItem('todos', JSON.stringify({todoList}))
}

addBtn.addEventListener('click', addTodo);