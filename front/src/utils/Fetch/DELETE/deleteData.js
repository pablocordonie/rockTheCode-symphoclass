import errorHandler from '../../Error/errorHandler';
import fetchData from '../fetch';

const deleteData = async (url, appConfig, HTMLElementsWithListeners) => {
    try {
        const data = await fetchData(url, 'delete', 'Ha habido un error al eliminar la información procedente del servidor');
        return data;
    } catch (error) {
        return errorHandler(error, 'deleteData', appConfig, HTMLElementsWithListeners);
    }
};

export default deleteData;