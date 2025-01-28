import fetchData from '../fetch';

const readData = (url) => fetchData(url, 'get');

export default readData;