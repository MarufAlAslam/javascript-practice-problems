document.getElementById('button').addEventListener("click", function () {
    document.body.style.backgroundColor = randomColors();
})

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}