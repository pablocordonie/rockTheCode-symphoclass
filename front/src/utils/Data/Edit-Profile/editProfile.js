import updateData from '../../Fetch/PUT/updateData';

const profileUpdaterResponse = async (appConfig, HTMLElementsWithListeners, userCredentials) => {
    const { urlsList } = appConfig;
    const { profileUrl } = urlsList;

    let { userData } = appConfig;

    return await updateData(`${profileUrl}/${userData.id}/update`, userCredentials, { 'Authorization': userData.token }, appConfig, HTMLElementsWithListeners);
};

export default profileUpdaterResponse;