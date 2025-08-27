import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import loginResponse from '../../../Data/Login/login';
import registerResponse from '../../../Data/Register/register';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createRegisterListenerFromRegisterPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName } = appConfig;
    const context = 'createRegisterListenerFromRegisterPage';

    let { userData } = appConfig;

    const callback = async (event) => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, context);
            const main = querySelectorChecker(`.${mainClassName}`, context);
            const footer = querySelectorChecker(`.${footerClassName}`, context);

            let loginCredentials = {};
            let loginRes = {};
            let registerCredentials = {};
            let registerRes = {};

            const usernameInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-username_field-input`, context);
            const fullnameInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-fullname_field-input`, context);
            const birthdateInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-birthdate_field-input`, context);
            const emailInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-email_field-input`, context);
            const passwordInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-password_field-input`, context);

            registerCredentials = JSON.stringify({ username: usernameInput.value, fullname: fullnameInput.value, birthdate: birthdateInput.value, email: emailInput.value, password: passwordInput.value });
            loginCredentials = JSON.stringify({ email: emailInput.value, password: passwordInput.value });

            registerRes = await registerResponse(appConfig, HTMLElementsWithListeners, registerCredentials);

            if (registerRes.error) {
                throw new Error(`${registerRes.error.message}`);
            } else if (registerRes.statusCode.toString().startsWith('4')) {
                throw new Error(`${registerRes.message}`);
            } else {
                loginRes = await loginResponse(appConfig, HTMLElementsWithListeners, loginCredentials);

                if (loginRes.error) {
                    throw new Error(`${loginRes.error.message}`);
                } else if (loginRes.statusCode.toString().startsWith('4')) {
                    throw new Error(`${loginRes.message}`);
                }

                userData = {
                    id: loginRes.data._id,
                    email: loginRes.data.email,
                    fullname: loginRes.data.fullname,
                    img: loginRes.data.img,
                    birthdate: loginRes.data.birthdate,
                    token: loginRes.token,
                    username: loginRes.data.username
                };
                appConfig.userData = userData;

                activatePageCleaner(appConfig, currentPage, header, main, footer);
                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
            }
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
        }
    };

    const registerEventListenerFromRegisterPage = createListenerConstructor(`.${className}-submit-btn`, context, callback, 'click');

    createNewListener(registerEventListenerFromRegisterPage, appConfig, HTMLElementsWithListeners, context);
};

export default createRegisterListenerFromRegisterPage;