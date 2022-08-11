const fetchAPI = async function fetchAPI(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}

const getEstado = function getEstado() {
    const estadoSeleciondo = getOptionSelectedValue(estadosSelect);
    showCidades(estadoSeleciondo);
    return estadoSeleciondo;
}

const getNameEstado = function getNameEstado() {
    const estadoSeleciondo = getOptionSelected(estadosSelect).innerHTML;
    return estadoSeleciondo;
}

const getCidade = function getCidade() {
    const cidadeSelecionada = getOptionSelectedValue(cidadesSelect);
    return cidadeSelecionada;
}

export {
    fetchAPI,
    getEstado,
    getNameEstado,
    getCidade
}