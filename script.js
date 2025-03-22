// let currentindx = 3;
// function delete_todo(indx) {
//   let todo_to_del = document.getElementById("todo-" + indx);
//   todo_to_del.parentNode.removeChild(todo_to_del);
// }
// function add_new_todo() {
//   //get the input value
//   const value = document.querySelector("input").value.trim();

//   //get the parent elemenet
//   const parentEl = document.getElementById("todo-list");

//   // create new div and set its attributes(id)
//   const newEL = document.createElement("div");
//   newEL.setAttribute("id", "todo-" + currentindx);

//   //create a hedaing4
//   const newh4 = document.createElement("h4");
//   newh4.textContent = value;

//   //create delete button and set it attributes
//   const newbtn = document.createElement("button");
//   newbtn.textContent = "DELETE";
//   newbtn.setAttribute("onclick", "delete_todo(" + currentindx + ")");
//   //newbtn.addEventListener("click", delete_todo(currentindx));

//   //append new child items in new div
//   newEL.appendChild(newh4);

//   newEL.appendChild(newbtn);

//   //append newdiv in todo-list
//   parentEl.appendChild(newEL);
//   currentindx++;

//   document.querySelector("input").value = "";
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// using state and components
let todos = []; //state

function addTodo() {
  if (document.querySelector("input").value === "") {
    alert(" please enter a valid todo");
    render();
    return;
  }
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
}

function deleteFirstTodo() {
  if (todos.length === 0) {
    alert("no item to delete");
    return;
  }
  todos.splice(0, 1);
  render();
}

function deleteLastTodo() {
  if (todos.length === 0) {
    alert("no item to delete");
    return;
  }
  todos.pop();
  render();
}
function deleteSpecific(indx) {
  todos.splice(indx, 1);
  render();
}
// creating a todo component-- "div which has all things needed for  all todo item"

function createTodoComponent(todo, indx) {
  //todo passed is an object of todos array
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const btn = document.createElement("button");
  h4.innerHTML = todo.title;
  btn.innerHTML = "DELETE";
  btn.onclick = () => deleteSpecific(indx);
  btn.classList.add("btn", "delete-btn");
  div.appendChild(h4);
  div.appendChild(btn);
  div.classList.add("todo-items");
  return div;
}

function render() {
  const parent = document.querySelector("#todo-list");
  parent.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const elem = createTodoComponent(todos[i], i);
    parent.appendChild(elem);
  }

  document.querySelector("input").value = "";
}
