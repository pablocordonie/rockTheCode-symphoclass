const fetchData = async (url, method, errorMessage, bodyText = '', headers = {}) => {
    const options = {
        method: method.toUpperCase(),
        headers: headers
    };

    if (bodyText && (options.method !== 'GET' || options.method !== 'DELETE')) {
        options.body = bodyText;
    }

    return await fetch(url, options).then(res => res.json()).then(res => res).catch(error => {
        throw new Error(errorMessage, error);
    });
};

export default fetchData;