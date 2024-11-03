import activateContentCleaner from '../../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../Cleaner/headerCleaner';
import createNewListener from '../../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../Filter/duplicatesRemover';
import launchEventsPage from '../../../Launcher/Events-List/launchEventsList';

const createRegisterListenerInRegisterPage = (appConfig, appId, currentPage, formClassName, headerClassName, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const registerButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, registerButton);

            const header = document.querySelector(`.${headerClassName}`);
            activateHeaderCleaner(header);
            const main = document.querySelector(`.${mainClassName}`);
            activateContentCleaner(main);

            launchEventsPage(appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName);
        },
        querySelector: document.querySelector(`.${formClassName}-${currentPage}_button`),
        type: 'click'
    };

    const { callback, querySelector, type } = registerButton;
    createNewListener(querySelector, callback, type);
};

export default createRegisterListenerInRegisterPage;