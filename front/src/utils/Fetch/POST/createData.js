import fetchData from '../fetch';

const createData = (url) => fetchData(url, 'post');

export default createData;