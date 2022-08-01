async function fetchAPI(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}

const requisicao = fetchAPI(
    "https://jsonplaceholder.typicode.com/t2odos/"
);

requisicao.then(response => {
    console.log(response)
}).catch(console.log("deu ruim"));

