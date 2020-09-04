"use strict";

const goocTodoList = function (boxid, title) {
  const todoBox = document.querySelector("#" + boxid);
  const todoTitle = document.createElement("h2");
  todoBox.appendChild(todoTitle);
  todoTitle.innerText = title;
  const todoForm = document.createElement("form");
  todoBox.appendChild(todoForm);
  const todoInput = document.createElement("input");
  todoInput.type = "text";
  todoInput.placeholder = "input your To-do";
  todoForm.appendChild(todoInput);
  const todoUl = document.createElement("ul");
  const finishUl = document.createElement("ul");
  todoBox.appendChild(todoUl);
  todoUl.id = "ul-todo";
  todoBox.appendChild(finishUl);
  finishUl.id = "ul-finish";

  const todoContentsList = [];

  const submitTodo = function () {
    event.preventDefault();

    let todoContent = todoInput.value;
    todoContentsList.push(todoContent);
    todoContent = document.createTextNode(todoContent);
    const todoLi = document.createElement("li");
    todoLi.id = "content" + todoContentsList.length;
    const todoCheckBox = document.createElement("input");
    todoCheckBox.type = "checkbox";
    todoLi.appendChild(todoCheckBox);
    todoCheckBox.classList.add("content" + todoContentsList.length);
    todoLi.appendChild(todoContent);
    todoUl.appendChild(todoLi);
    todoInput.value = "";
    console.log(todoContentsList);
  };
  const finishTodo = function () {
    console.log("fuck");
  };
  todoForm.addEventListener("submit", submitTodo);
  todoCheckBox.addEventListener("click", finishTodo);

  console.log(todoContentsList);
};

goocTodoList("MYTODO", "TodoLIST!");
