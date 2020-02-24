
function updateWords() {
    const container = document.querySelector(".container");

    container.innerHTML = container.innerHTML.replace(/The/g, "Replaced").replace(/the/g, "replaced");


}

setTimeout(updateWords, 4000);

