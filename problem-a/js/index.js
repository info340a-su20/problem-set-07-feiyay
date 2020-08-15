'use strict';

/* your code goes here! */
class Task {
  constructor(description, complete){
    this.description = description;
    this.complete = complete;
  }
  render(){
    let element = document.createElement('li');
    element.textContent = this.description;
    if(this.complete==true){
    element.classList.add('font-strike');}
    element.addEventListener('click', ()=>{
      this.toggleFinished();
      element.classList.toggle('font-strike');
    })
      return element;
  
  }
  


toggleFinished() {
  this.complete = !this.complete;
  }
}


class TaskList {
  constructor(array){
    this.tasks = array;
  }
  addTask(description){
    let newtask = new Task(description,false);
    this.tasks.push(newtask);
  }
  render(){
    let ol = document.createElement('ol');
    this.tasks.forEach(task=>{
      let task1 = new Task(task.description,task.complete);
      let theelement = task1.render();
      ol.appendChild(theelement);
    })
    return ol;
  }
}
class NewTaskForm{
  constructor(submitCallback){
    this.submitCallback = submitCallback;
  }
  render(){
    let form = document.createElement('form');
    let input = document.createElement('input');
    input.classList.add('form-control');
    input.classList.add('mb-3');
    input.setAttribute('placeholder',"What else do you have to do?");
    form.appendChild(input);
    
    let button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.textContent="Add task to list";
    form.appendChild(button);

    button.addEventListener('click', (event)=> {
      event.preventDefault();
      this.submitCallback(input.value);
    })



    return form;
  }
} 

class App {
  constructor(parent,tasklist){
    this.parentElement=parent;
    this.taskList=tasklist;
  }
  render(){
    this.parentElement.appendChild(this.taskList.render());
    let form = new NewTaskForm((string)=>this.addTaskToList(string));
    this.parentElement.appendChild(form.render());
  }
  addTaskToList(string){
    this.taskList.addTask(string);
    this.parentElement.innerHTML='';
    this.render();
  }
}


let taskList1 = new TaskList([
  new Task("Make some classes", true),
  new Task("Arrow some functions",false)
]);



let app1 = document.querySelector('#app');
let app2 = new App(app1, taskList1);
app2.render();





//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
