const BG_KEY = "nrIGP-0WAM2qTJTvcmo8rGjJnZeSaGVRfDaNncL12h8"
const UNSPLASH_URL = `https://api.unsplash.com/photos/random?client_id=${BG_KEY}&query=landscape&like=landscape`;



function paintImg() {

    fetch(UNSPLASH_URL)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json.urls.full)
            const body = document.querySelector("body");
            var bgImg = new Image();
            bgImg.onload = function () {
                body.style.backgroundImage = `url(${json.urls.full})`;
            }
            if (bgImg.complete) bgImg.onload();
        })
}
paintImg();