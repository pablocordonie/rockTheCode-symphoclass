import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createData from '../../../Fetch/POST/createData';
import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createLoginListenerInLoginPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName, tscClassName, urlsList } = appConfig;
    const { loginUrl } = urlsList;
    const context = 'createLoginListenerInLoginPage';

    let { userData } = appConfig;

    const callback = async (event) => {
        try {
            event.preventDefault();

            const tsc = querySelectorChecker(`.${tscClassName}`, context);

            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);

            const emailInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-email_field-input`, context);
            const passwordInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-password_field-input`, context);

            const userCredentials = JSON.stringify({ email: emailInput.value, password: passwordInput.value });

            const res = await createData(loginUrl, userCredentials, { 'Content-Type': 'application/json' }, appConfig, HTMLElementsWithListeners);

            if (res.statusCode !== 200) {
                throw new Error('Ha ocurrido un error al iniciar sesión');
            } else {
                tsc.classList.remove('tsc-flex');

                activatePageCleaner(header, main, footer);

                userData = {
                    email: res.data.email,
                    fullname: res.data.fullname,
                    img: res.data.img,
                    birthdate: res.data.birthdate,
                    password: res.data.password,
                    token: res.token,
                    username: res.data.username
                };
                appConfig.userData = userData;

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