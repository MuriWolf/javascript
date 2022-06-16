const cards = document.querySelectorAll(".c-card__content");
const time1 = document.querySelector(".time1");
const time2 = document.querySelector(".time2");
const time3 = document.querySelector(".time3");


function getJson(time) {
    fetch("data.json")
    .then((resp)=> resp.json())
    .then(function(data) {

        let c = 0
        cards.forEach(card =>{
            const current = data[c].timeframes[time].current;
            const previous = data[c].timeframes[time].previous;

            texto1 = card.querySelector(".texto1");
            texto2 = card.querySelector(".texto2");

            texto1.textContent = current;
            texto2.textContent = previous;
            c++
        })
    }) 
}

function daily() {
    getJson("daily");
}
function weekly() {
    getJson("weekly");
}
function monthly() {
    getJson("monthly");
}

time1.addEventListener("click", daily);
time2.addEventListener("click", weekly);
time3.addEventListener("click", monthly);