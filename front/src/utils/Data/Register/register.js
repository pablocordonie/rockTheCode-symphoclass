import createData from '../../Fetch/POST/createData';

const registerResponse = async (appConfig, HTMLElementsWithListeners, userCredentials) => {
    const { urlsList } = appConfig;
    const { registerUrl } = urlsList;

    return await createData(registerUrl, userCredentials, { 'Content-Type': 'application/json' }, appConfig, HTMLElementsWithListeners);
};

export default registerResponse;