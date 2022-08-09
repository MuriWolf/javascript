const btnSubmit = document.querySelector(".btn-submit");

btnSubmit.addEventListener("click", () => {
    const lon = document.querySelector("#lon").value;
    const lat = document.querySelector("#lat").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=139&appid=a8964c08f0867f5163d14200e7698d52')
        .then(response => response.json())
        .then(response => console.log(response))
    .catch(err => console.error(err))
})
