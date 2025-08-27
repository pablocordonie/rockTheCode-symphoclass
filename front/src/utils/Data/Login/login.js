import createData from '../../Fetch/POST/createData';

const loginResponse = async (appConfig, HTMLElementsWithListeners, userCredentials) => {
    const { urlsList } = appConfig;
    const { loginUrl } = urlsList;

    return await createData(loginUrl, userCredentials, { 'Content-Type': 'application/json' }, appConfig, HTMLElementsWithListeners);
};

export default loginResponse;