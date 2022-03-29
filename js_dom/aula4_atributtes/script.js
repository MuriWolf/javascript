document.getElementById("btn-set").addEventListener("click", function() {
    document.getElementById("title").setAttribute("class", "red");
})

document.getElementById("btn-remove").addEventListener("click", function() {
    document.getElementById("title").removeAttribute("class", "red")
})

document.getElementById("btn-get").addEventListener("click", function() {
    var value = document.getElementById("title").getAttribute("class", "red")
    document.getElementById("classe").innerHTML = value

})