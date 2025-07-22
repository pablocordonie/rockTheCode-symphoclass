import errorHandler from '../../Error/errorHandler';
import fetchData from '../fetch';

const createData = async (url, bodyText, headers, appConfig, HTMLElementsWithListeners) => {
    try {
        const data = await fetchData(url, 'post', 'Ha habido un error al generar la nueva información dentro del servidor', bodyText, headers);
        return data;
    } catch (error) {
        return errorHandler(error, 'createData', appConfig, HTMLElementsWithListeners);
    }
};

export default createData;