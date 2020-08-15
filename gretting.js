const title = document.querySelector("#title");
const form = document.querySelector(".nameInput");
const input = form.querySelector("input");
const obj = {
    screenTitle: "Hello What's your Name?",
    screenName: null,
    didIGotAName: false,
    storageName: null,
};

function updateScreens() {
    obj.storageName = localStorage.storageName
    obj.screenName = obj.storageName
    title.innerText = obj.screenTitle
}
updateScreens();

function askName() {
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const text = input.value
        saveName(text)
        showName();
    });
};

function saveName(text) {
    localStorage.setItem("storageName", text)
    obj.storageName = localStorage.storageName
    obj.didIGotAName = true;
}

function showName() {
    const showTitle = document.querySelector(".greeting")
    const typeC = document.querySelector(".cg-wrap")
    const typeA = document.querySelector(".getName-wrap")
    typeA.classList.add("js-getName-wrap")
    typeC.classList.remove("js-cg-wrap")
    obj.screenName = obj.storageName
    showTitle.innerText = "Good evening, " + obj.screenName + "."
};

function loadName() {
    if (localStorage.storageName) {
        obj.didIGotAName = true;
        showName();
    } else {
        askName();
    }
}
loadName();