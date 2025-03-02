import errorHandler from '../../Error/errorHandler';
import fetchData from '../fetch';

const createData = async (url, appConfig, HTMLElementsWithListeners) => {
    try {
        const data = await fetchData(url, 'post');
        return data;
    } catch (error) {
        return errorHandler(error, 'createData', appConfig, HTMLElementsWithListeners);
    }
};

export default createData;