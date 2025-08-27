import activatePageCleaner from '../../Cleaner/pageCleaner';
import createListenerConstructor from '../Listener/Constructor/constructor';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import profileUpdaterResponse from '../../Data/Edit-Profile/editProfile';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';

const createUpdateProfileListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName } = appConfig;
    let { userData } = appConfig;
    const context = 'createUpdateProfileListener';

    const callback = async (event) => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, context);
            const main = querySelectorChecker(`.${mainClassName}`, context);
            const footer = querySelectorChecker(`.${footerClassName}`, context);

            let profileCredentials = {};
            let profileUpdaterRes = {};

            const usernameInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-username-field-input`, context);
            const fullnameInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-fullname-field-input`, context);
            const emailInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-email-field-input`, context);
            const birthdateInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-birthdate-field-input`, context);
            const imageInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-img-field-input`, context);
            const passwordInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-password-field-input`, context);

            profileCredentials = new FormData();
            profileCredentials.append('username', usernameInput.value || '');
            profileCredentials.append('fullname', fullnameInput.value || '');
            profileCredentials.append('birthdate', birthdateInput.value || '');
            profileCredentials.append('email', emailInput.value || '');
            profileCredentials.append('password', passwordInput.value || '');
            if (imageInput.files.length) {
                profileCredentials.append('img', imageInput.files[0]);
            }

            profileUpdaterRes = await profileUpdaterResponse(appConfig, HTMLElementsWithListeners, profileCredentials);

            if (profileUpdaterRes.error) {
                console.log(profileUpdaterRes.error);
                throw new Error(`${profileUpdaterRes.error.message}`);
            } else if (profileUpdaterRes.statusCode.toString().startsWith('4')) {
                console.log(profileUpdaterRes);
                throw new Error(`${profileUpdaterRes.message}`);
            } else {
                userData = {
                    id: profileUpdaterRes.data._id,
                    email: profileUpdaterRes.data.email,
                    fullname: profileUpdaterRes.data.fullname,
                    img: profileUpdaterRes.data.img,
                    birthdate: profileUpdaterRes.data.birthdate,
                    token: userData.token,
                    username: profileUpdaterRes.data.username
                };
                appConfig.userData = userData;

                activatePageCleaner(appConfig, currentPage, header, main, footer);
                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
            }
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
        }
    };

    const updateProfileListener = createListenerConstructor(`.${mainClassName}-${currentPage}-form-submit-btn`, context, callback, 'click');

    createNewListener(updateProfileListener, appConfig, HTMLElementsWithListeners, context);
};

export default createUpdateProfileListener;