import errorHandler from '../../Error/errorHandler';
import fetchData from '../fetch';

const readData = async (url, appConfig, HTMLElementsWithListeners) => {
    try {
        const data = await fetchData(url, 'get', 'Ha habido un error al comprobar la información procedente del servidor');
        return data;
    } catch (error) {
        return errorHandler(error, 'readData', appConfig, HTMLElementsWithListeners);
    }
};

export default readData;