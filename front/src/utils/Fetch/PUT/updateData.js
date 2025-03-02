import errorHandler from '../../Error/errorHandler';
import fetchData from '../fetch';

const updateData = async (url, appConfig, HTMLElementsWithListeners) => {
    try {
        const data = await fetchData(url, 'put');
        return data;
    } catch (error) {
        return errorHandler(error, 'updateData', appConfig, HTMLElementsWithListeners);
    }
};

export default updateData;