import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createData from '../../../Fetch/POST/createData';
import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createRegisterListenerFromRegisterPage = (className, appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName, tscClassName, urlsList } = appConfig;
    const { registerUrl } = urlsList;
    const context = 'createRegisterListenerFromRegisterPage';

    let { userData } = appConfig;

    const callback = async (event) => {
        try {
            event.preventDefault();

            const tsc = querySelectorChecker(`.${tscClassName}`, context);

            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);

            const usernameInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-username_field-input`, context);
            const fullnameInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-fullname_field-input`, context);
            const birthdateInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-birthdate_field-input`, context);
            const emailInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-email_field-input`, context);
            const passwordInput = querySelectorChecker(`.${mainClassName}-${currentPage}-form-password_field-input`, context);

            const userCredentials = JSON.stringify({ username: usernameInput.value, fullname: fullnameInput.value, birthdate: birthdateInput.value, email: emailInput.value, password: passwordInput.value });

            const res = await createData(registerUrl, userCredentials, { 'Content-Type': 'application/json' }, appConfig, HTMLElementsWithListeners);

            if (res.statusCode !== 201) {
                throw new Error('Ha ocurrido un error al registrarse');
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

    const registerEventListenerFromRegisterPage = createListenerConstructor(`.${className}-submit-btn`, context, callback, 'click');

    createNewListener(registerEventListenerFromRegisterPage, appConfig, HTMLElementsWithListeners, context);
};

export default createRegisterListenerFromRegisterPage;