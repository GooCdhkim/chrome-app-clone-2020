const title = document.querySelector("#title");

const ClICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== ClICKED_CLASS) {
    title.className = ClICKED_CLASS;
  } else {
    title.className = "";
  }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
