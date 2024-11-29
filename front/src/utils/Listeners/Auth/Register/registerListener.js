import activateContentCleaner from '../../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../Cleaner/headerCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import errorHandler from '../../../Error/errorHandler';
import launchEventsPage from '../../../Launcher/Events-List/launchEventsList';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createRegisterListenerInRegisterPage = (className, appConfig, currentPage, HTMLElements) => {
    const { headerClassName, mainClassName } = appConfig;
    const registerButton = {
        callback: (event) => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, registerButton);

            const header = querySelectorChecker(`.${headerClassName}`, appConfig, 'createRegisterListenerInRegisterPage', `El HTMLElement de className .${headerClassName} no ha podido ser encontrado`, HTMLElements);
            activateHeaderCleaner(header);
            const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'createRegisterListenerInRegisterPage', `El HTMLElement de className .${mainClassName} no ha podido ser encontrado`, HTMLElements);
            activateContentCleaner(main);

            try {
                event.preventDefault();
                launchEventsPage(appConfig, currentPage, HTMLElements);
            } catch (error) {
                errorHandler(error, 'createRegisterListenerInRegisterPage');
            }
        },
        querySelector: querySelectorChecker(`.${className}-${currentPage}_button`, appConfig, 'createRegisterListenerInRegisterPage', `El HTMLElement de className .${className}-${currentPage}_button no ha podido ser encontrado`, HTMLElements),
        type: 'click'
    };

    const { callback, querySelector, type } = registerButton;
    createNewListener(querySelector, callback, type);
};

export default createRegisterListenerInRegisterPage;