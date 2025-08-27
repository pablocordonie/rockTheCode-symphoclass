import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import loginResponse from '../../../Data/Login/login';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createLoginListenerInLoginPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName } = appConfig;
    const context = 'createLoginListenerInLoginPage';

    let { userData } = appConfig;

    const callback = async (event) => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, context);
            const main = querySelectorChecker(`.${mainClassName}`, context);
            const footer = querySelectorChecker(`.${footerClassName}`, context);

            let userCredentials = {};
            let res = {};

            const emailInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-email_field-input`, context);
            const passwordInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-password_field-input`, context);

            userCredentials = JSON.stringify({ email: emailInput.value, password: passwordInput.value });

            res = await loginResponse(appConfig, HTMLElementsWithListeners, userCredentials);

            if (res.error) {
                throw new Error(`${res.error.message}`);
            } else if (res.statusCode.toString().startsWith('4')) {
                throw new Error(`${res.message}`);
            } else {
                userData = {
                    id: res.data._id,
                    email: res.data.email,
                    fullname: res.data.fullname,
                    img: res.data.img,
                    birthdate: res.data.birthdate,
                    token: res.token,
                    username: res.data.username
                };
                appConfig.userData = userData;

                activatePageCleaner(appConfig, currentPage, header, main, footer);
                launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
            }
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
        }
    };

    const loginEventListenerFromLoginPage = createListenerConstructor(`.${className}-submit-btn`, context, callback, 'click');

    createNewListener(loginEventListenerFromLoginPage, appConfig, HTMLElementsWithListeners, context);
};

export default createLoginListenerInLoginPage;