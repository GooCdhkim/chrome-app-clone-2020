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
    let idLogic = "content" + todoContentsList.length;
    todoLi.id = idLogic;
    const todoCheckBox = document.createElement("input");
    todoCheckBox.type = "checkbox";
    todoLi.appendChild(todoCheckBox);
    todoCheckBox.classList.add(idLogic);
    const removeTodo = function () {
      const removeTarget = this.classList[0];
      const li = document.getElementById(removeTarget);
      li.remove();
    };
    todoLi.appendChild(todoContent);
    todoUl.appendChild(todoLi);
    todoInput.value = "";
    console.log(todoContentsList.value);
    todoCheckBox.addEventListener("change", removeTodo);
  };

  todoForm.addEventListener("submit", submitTodo);
};

goocTodoList("MYTODO", "TodoLIST!");
