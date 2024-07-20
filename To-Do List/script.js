const inputText = document.getElementById('input')
const tasks = document.querySelector('.tasks')
const taskCount = document.getElementById('taskCount');
let taskCounter = 0;


function Add(){
    if(inputText.value.trim() === ""){
        alert("Please Enter Task")
    }
    else{
        let newElement = document.createElement("li")
        newElement.innerHTML = `${inputText.value}  <i class="fa-solid fa-trash"></i>`;
        tasks.appendChild(newElement);
        inputText.value="";
        taskCounter++;
        updateTaskCount();


        newElement.querySelector("i").addEventListener("click",remove);
        function remove(){
            newElement.remove();
            taskCounter--;
            updateTaskCount();
        }
    }
}
function updateTaskCount() {
    taskCount.textContent = taskCounter;
}