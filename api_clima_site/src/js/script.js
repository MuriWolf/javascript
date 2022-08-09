const btnSubmit = document.querySelector(".btn-send");

btnSubmit.addEventListener("click", () => {
    const city = document.querySelector("#city").value.toLowerCase();
    const state = document.querySelector("#state").value.toLowerCase();
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=a8964c08f0867f5163d14200e7698d52`)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        response.every(function(local, i) {
            if(local.state.toLowerCase() == state) {
                lat = local.lat; 
                lon = local.lon;
                return false;
            } 
            else return true;
        })
        
        console.log(lat,lon);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8964c08f0867f5163d14200e7698d52`)
            .then(response => response.json())
            .then(response => console.log(response))
        .catch(err => console.error(err))
    })

})
