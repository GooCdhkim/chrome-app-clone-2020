const title = document.querySelector("#title");
const form = document.querySelector(".nameInput");
const input = form.querySelector("input");
const obj = {
    screenTitle: "Hello What's your Name?",
    didIGotAName: false,
    userName: null,
    greetingMsg: String,
    hours: Number,
};

function switchMsg() {
    switch (true) {
        case (obj.hours < 4):
            obj.greetingMsg = "Good evening, ";
            break;
        case (obj.hours < 12):
            obj.greetingMsg = "Good morning, ";
            break;
        case (obj.hours < 18):
            obj.greetingMsg = "Good afternoon, ";
            break;
        default:
            obj.greetingMsg = "Good evening, ";
            break;
    }

}

function updateScreens() {
    obj.userName = localStorage.userName;
    title.innerText = obj.screenTitle;
}
updateScreens();

function askName() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const text = input.value;
        saveName(text);
        showTypeC();
    });
}

function saveName(text) {
    localStorage.setItem("userName", text);
    obj.didIGotAName = true;
}

function showTypeC() {
    const showTitle = document.querySelector(".greeting");
    const typeC = document.querySelector(".cg-wrap");
    const typeA = document.querySelector(".getName-wrap");
    typeA.classList.add("js-getName-wrap");
    typeC.classList.remove("js-cg-wrap");
    switchMsg()
    obj.userName = localStorage.userName;
    showTitle.innerText = obj.greetingMsg + obj.userName + ".";
}

function loadName() {
    if (localStorage.userName) {
        obj.didIGotAName = true;
        showTypeC();
    } else {
        askName();
    }
}