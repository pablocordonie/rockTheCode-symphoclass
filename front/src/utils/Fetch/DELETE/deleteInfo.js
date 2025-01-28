import fetchData from '../fetch';

const deleteData = (url) => fetchData(url, 'delete');

export default deleteData;