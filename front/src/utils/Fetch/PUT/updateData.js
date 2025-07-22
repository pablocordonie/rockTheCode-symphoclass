import errorHandler from '../../Error/errorHandler';
import fetchData from '../fetch';

const updateData = async (url, appConfig, HTMLElementsWithListeners) => {
    try {
        const data = await fetchData(url, 'put', 'Ha habido un error al actualizar la información dentro del servidor');
        return data;
    } catch (error) {
        return errorHandler(error, 'updateData', appConfig, HTMLElementsWithListeners);
    }
};

export default updateData;