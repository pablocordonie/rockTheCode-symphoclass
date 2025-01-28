const fetchData = (url, method) => fetch(url, {
    method: method.toUpperCase()
}).then(res => res.json()).then(res => res).catch(error => {
    throw new Error('Ha habido un error manejando la información procedente del servidor', error);
});

export default fetchData;