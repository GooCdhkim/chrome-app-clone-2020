const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoListPending = document.querySelector(".js-toDoList-pending");
const toDoListFinished = document.querySelector(".js-toDoList-finished");

const TODOS_LS = "penDing";
const FINISH_LS = "finished";

let penDing = [];
let finished = [];

function deleteToDo(event) {
  const dBtn = event.target;
  const pli = dBtn.parentNode;
  toDoListPending.removeChild(pli);
  const cleanToDos = penDing.filter(function (toDo) {
    return toDo.id !== parseInt(pli.id);
  });
  penDing = cleanToDos;
  saveToDos();
}

function deleteFinish(event) {
  const dBtn = event.target;
  const pli = dBtn.parentNode;
  console.dir(pli.parentNode);
  toDoListFinished.removeChild(pli);
  const cleanToDos = finished.filter(function (toDo) {
    return toDo.id !== parseInt(pli.id);
  });
  finished = cleanToDos;
  saveFinished();
}
function finishToDo(event) {
  const dBtn = event.target;
  const pli = dBtn.parentNode;
  const text = pli.childNodes[0].textContent;

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = finished.length + 1;
  const toDoObj = {
    text: text,
    id: newId,
  };
  delBtn.innerText = "X";
  backBtn.innerText = "Back";
  delBtn.addEventListener("click", deleteFinish);
  backBtn.addEventListener("click", backDelete);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(backBtn);
  li.appendChild(delBtn);
  li.id = newId;
  li.classList.add("animation-init");
  setTimeout(function () {
    li.classList.add("animation-fade");
  }, 30);
  li.id = newId;
  toDoListFinished.appendChild(li);

  finished.push(toDoObj);
  saveFinished();
}

function backPending(event) {
  const dBtn = event.target;
  const pli = dBtn.parentNode;
  const text = pli.childNodes[0].textContent;

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finishBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = penDing.length + 1;
  const toDoObj = {
    text: text,
    id: newId,
  };
  delBtn.innerText = "X";
  finishBtn.innerText = "O";
  delBtn.addEventListener("click", deleteToDo);
  finishBtn.addEventListener("click", todoFinish);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(finishBtn);
  li.appendChild(delBtn);
  li.id = newId;
  li.classList.add("animation-init");
  setTimeout(function () {
    li.classList.add("animation-fade");
  }, 30);
  li.id = newId;
  toDoListPending.appendChild(li);

  penDing.push(toDoObj);
  saveToDos();
}
function backDelete(event) {
  backPending(event);
  deleteFinish(event);
}
function todoFinish(event) {
  finishToDo(event);
  deleteToDo(event);
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(penDing));
}
function saveFinished() {
  localStorage.setItem(FINISH_LS, JSON.stringify(finished));
}

function paintFinish(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = finished.length + 1;
  const toDoObj = {
    text: text,
    id: newId,
  };
  delBtn.innerText = "X";
  backBtn.innerText = "Back";
  delBtn.addEventListener("click", deleteFinish);
  backBtn.addEventListener("click", backDelete);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(backBtn);
  li.appendChild(delBtn);
  li.id = newId;
  li.classList.add("animation-init");
  setTimeout(function () {
    li.classList.add("animation-fade");
  }, 30);
  li.id = newId;
  toDoListFinished.appendChild(li);

  finished.push(toDoObj);
  saveFinished();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finishBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = penDing.length + 1;
  const toDoObj = {
    text: text,
    id: newId,
  };

  delBtn.innerText = "X";
  finishBtn.innerText = "O";
  delBtn.addEventListener("click", deleteToDo);
  finishBtn.addEventListener("click", todoFinish);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(finishBtn);
  li.appendChild(delBtn);
  li.id = newId;
  li.classList.add("animation-init");
  setTimeout(function () {
    li.classList.add("animation-fade");
  }, 30);

  toDoListPending.appendChild(li);
  penDing.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
      console.log(toDo);
    });
  }
}
function loadFinished() {
  const loadFinisheds = localStorage.getItem(FINISH_LS);
  if (loadFinisheds !== null) {
    const parsedToDos = JSON.parse(loadFinisheds);
    parsedToDos.forEach(function (toDo) {
      paintFinish(toDo.text);
    });
  }
}
function init() {
  loadToDos();
  loadFinished();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
