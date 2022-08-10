const btnSubmit = document.querySelector(".btn-send");

async function fetchAPI(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
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
    const estadoSeleciondo = getOptionSelected(estadosSelect);
    return estadoSeleciondo.innerHTML;
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

function getCidade() {
    const cidadeSelecionada = getOptionSelectedValue(cidadesSelect);
    return cidadeSelecionada;
}

btnSubmit.addEventListener("click", () => {
    const city = getCidade();
    const state = getNameEstado();
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=a8964c08f0867f5163d14200e7698d52`)
    .then(response => response.json())
    .then(response => {
        response.every(function(local, i) {
            if(local.state.toLowerCase() == state) {
                lat = local.lat; 
                lon = local.lon;
                return false;
            } 
            else return true;
        })
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8964c08f0867f5163d14200e7698d52`)
            .then(response => response.json())
            .then(response => console.log(response))
        .catch(err => console.error(err))
    })
})
