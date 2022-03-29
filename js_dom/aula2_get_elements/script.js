console.log(
    window.document.getElementsByClassName("anime")
)
console.log(
    window.document.getElementsByClassName("anime")[2]
)
console.log(
    window.document.getElementsByClassName("anime")[2].innerHTML 
)

console.log(
    window.document.getElementsByTagName("p")
)
console.log(
    window.document.querySelector("p")
)

console.log(
    window.document.getElementById("FPS-games"),
    window.document.getElementById("FPS-games").querySelectorAll(".game"),
    window.document.getElementById("FPS-games").querySelectorAll(".game")[1],
    window.document.getElementById("FPS-games").querySelectorAll(".game")[1].innerHTML,
)

console.log(
    document.getElementById("RPG-games").querySelectorAll(".game")[0].innerHTML
)