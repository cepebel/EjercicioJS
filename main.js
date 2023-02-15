
class Task{
    name;
    estimation;

    constructor(name, estimation){
        this.name = name;
        this.estimation = this.estimation;
    }

}
const buttonToDo = document.getElementById("toDoButton");
buttonToDo.addEventListener("click", (e) => (addItem(e)));

const buttonInprogress = document.getElementById("inProgressButton");
/*buttonInprogress.addEventListener("click",addItem("progress")); */
buttonInprogress.addEventListener("click",(e) => (addItem(e)));

const buttonToBeTested = document.getElementById("toBeTestedButton");
/*buttonToBeTested.addEventListener("click",addItem("tested"));*/
buttonToBeTested.addEventListener("click",(e) => (addItem(e)));

const buttonDone = document.getElementById("doneButton");
buttonDone.addEventListener("click",(e) => (addItem(e)));
/*buttonDone.addEventListener("click",addItem("done")) */



function addItem(e){
    e.preventDefault();
    var task = getTask();
    /*var fatherID = e;*/
    const node = document.getElementById("default");
    const clone = node.cloneNode(true);
    clone.id = "newID";
    /*clone.style.display = 'block';
    /*const deleteOperation = document.getElementById("buttonDelete");
    deleteOperation.addEventListener("click",deleteItem(clone)); */
    clone.getElementsByTagName("p")[0].innerHTML = task.name;
    /*clone.getElementsByTagName("p").estimation = task.estimation;*/
    document.getElementById("toDoFather").appendChild(clone);
}
function deleteItem(e){
    e.remove()

}
function goLeft(e){

}
function goRight(e){

}
function getTask(){
    
    var NAME = document.getElementById("taskName").value;
    var ESTIMATION = document.getElementById("taskEstimation").value;
    if(NAME ==""){
        alert("Por favor, escriba el nombre de la tarea");
        return;
    } else{
        var task = new Task(NAME, ESTIMATION);
        return task;
    }

}
