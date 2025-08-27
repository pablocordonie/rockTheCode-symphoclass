import errorHandler from '../../Error/errorHandler';
import fetchData from '../fetch';

const updateData = async (url, bodyText, headers, appConfig, HTMLElementsWithListeners) => {
    try {
        const data = await fetchData(url, 'put', 'Ha habido un error al actualizar la información dentro del servidor', headers, bodyText);
        return data;
    } catch (error) {
        return errorHandler(error, 'updateData', appConfig, HTMLElementsWithListeners);
    }
};

export default updateData;