import activateContentCleaner from '../../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../Cleaner/headerCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import launchEventsPage from '../../../Launcher/Events-List/launchEventsList';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createLoginListenerInLoginPage = (className, appConfig, currentPage, HTMLElements) => {
    const { headerClassName, mainClassName } = appConfig;
    const loginButton = {
        callback: (event) => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, loginButton);

            const header = querySelectorChecker(`.${headerClassName}`, appConfig, 'createLoginListenerInLoginPage', `El HTMLElement de className .${headerClassName} no ha podido ser encontrado`, HTMLElements);
            activateHeaderCleaner(header);

            const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'createLoginListenerInLoginPage', `El HTMLElement de className .${mainClassName} no ha podido ser encontrado`, HTMLElements);
            activateContentCleaner(main);

            try {
                event.preventDefault();
                launchEventsPage(appConfig, currentPage, HTMLElements);
            } catch (error) {
                errorHandler(error, 'createLoginListenerInLoginPage');
            }
        },
        querySelector: querySelectorChecker(`.${className}-${currentPage}_button`, appConfig, 'createLoginListenerInLoginPage', `El HTMLElement de className .${className}-${currentPage}_button no ha podido ser encontrado`, HTMLElements),
        type: 'click'
    };

    const { callback, querySelector, type } = loginButton;
    createNewListener(querySelector, callback, type);
};

export default createLoginListenerInLoginPage;