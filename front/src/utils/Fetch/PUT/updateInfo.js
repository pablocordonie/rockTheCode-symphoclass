import fetchData from '../fetch';

const updateData = (url) => fetchData(url, 'put');

export default updateData;