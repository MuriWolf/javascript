async function fetchAPI(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}

function getOptionSelectedValue(name) {
    return name.options[name.selectedIndex].value;
}

function getOptionSelected(name) {
     return name.options[name.selectedIndex];
}

function getEstado() {
    const estadoSeleciondo = getOptionSelectedValue(estadosSelect);
    showCidades(estadoSeleciondo);
    return estadoSeleciondo;
}

function getNameEstado() {
    const estadoSeleciondo = getOptionSelected(estadosSelect).innerHTML;
    return estadoSeleciondo;
}

function getCidade() {
    const cidadeSelecionada = getOptionSelectedValue(cidadesSelect);
    return cidadeSelecionada;
}

function updateData(data, element) {
    const elementA = document.querySelector(`.${element}`);
    elementA.innerHTML = data;
}

function toCelsius(type, value) {
    if (type == "fahrenheit") {
        return 
    } else if (type == "kelvin") {
        return 
    }
}

function showCidades(estadoSeleciondo) {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSeleciondo}/municipios`)
    .then(response => response.json())
    .then(cidades => {
        cidadesSelect = document.querySelector("#cidades");
        cidadesSelect.innerHTML = cidades.map((cidade) => {
            return `
              <option value='${cidade.nome}'>
                ${cidade.nome}
              </option>
            `;
          }).join('');
    })
}

fetchAPI(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`).then(estados => {
    estadosSelect = document.querySelector("#estados");
    estadosSelect.addEventListener("change", getEstado);
    estadosSelect.innerHTML = estados.map((estado) => {
        return `
          <option value='${estado.id}'>
            ${estado.nome}
          </option>
        `;
      }).join('');
      getEstado();
});

const btnSubmit = document.querySelector(".btn-send");

btnSubmit.addEventListener("click", () => {
    const city = getCidade();
    const state = getNameEstado();
    const cityElement = document.querySelector(".city-name");
    const stateElement = document.querySelector(".state-name");
    stateElement.innerHTML = state;
    cityElement.innerHTML = city + ", ";
    
    fetchAPI(`http://api.openweathermap.org/geo/1.0/direct?q=${city},br&limit=5&appid=a8964c08f0867f5163d14200e7698d52`).then(response => {

        response.every(function(local) {
            lat = local.lat; 
            lon = local.lon;
        })
    }).then(response => {
        // dados de temperatura da cidade
        fetchAPI(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8964c08f0867f5163d14200e7698d52`).then(response => {
            console.log(response);
            // console.log(response.weather[0].main);
            const weatherMain = response.weather[0].main;
            const weatherDesc = response.weather[0].description;
            const weatherIcon = response.weather[0].icon;

            const temp = response.main.temp;
            const feels_like = response.main.feels_like;
            const tempMax = response.main.temp_max;
            const tempMin = response.main.temp_min;
            const pressure = response.main.pressure;
            const humidity = response.main.humidity;

            const visibility = response.visibility;

            const windSpeed = response.wind.speed;
            const windDeg = response.wind.deg;

            const clouds = response.clouds.all;

            const sunrise = response.sys.sunrise;
            const sunset = response.sys.sunset;

            const timezone = response.timezone;

            console.table({weatherMain, weatherDesc, weatherIcon, temp, feels_like, tempMax, tempMin, pressure, humidity, visibility, windSpeed, windDeg, clouds, sunrise, sunset, timezone})

            updateData(temp, "temp")
            updateData(weatherDesc, "weather")

            const weatherIconElement = document.querySelector(".weather-icon");
            weatherIconElement.src = `icons/${weatherIcon}.png`;

        })

    })
})