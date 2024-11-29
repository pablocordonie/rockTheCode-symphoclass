import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner'
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import errorHandler from '../../Error/errorHandler';
import launchLoginPage from '../../Launcher/Login/launchLogin';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import toggleClass from '../../Toggle/toggleClass';

const createLogoutListener = (appConfig, currentPage, HTMLElements) => {
    const { headerClassName, mainClassName } = appConfig;

    const logoutOption = {
        callback: () => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, logoutOption);

            if (currentPage === 'events') {
                const eventsHeader = querySelectorChecker(`.${headerClassName}-events`, appConfig, 'createLogoutListener', `El HTMLElement de className .${headerClassName}-events no se ha encontrado`, HTMLElements);
                toggleClass(eventsHeader, `${headerClassName}`, currentPage);
                activateHeaderCleaner(eventsHeader);

                const eventsMain = querySelectorChecker(`.${mainClassName}-events`, appConfig, 'createLogoutListener', `El HTMLElement de className .${mainClassName}-events no se ha encontrado`, HTMLElements);
                toggleClass(eventsMain, `${mainClassName}`, currentPage);
                activateContentCleaner(eventsMain);
            } else {
                const header = querySelectorChecker(`.${headerClassName}`, appConfig, 'createLogoutListener', `El HTMLElement de className .${headerClassName} no se ha encontrado`, HTMLElements);
                activateHeaderCleaner(header);

                const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'createLogoutListener', `El HTMLElement de className .${mainClassName} no se ha encontrado`, HTMLElements);
                activateContentCleaner(main);
            }

            try {
                launchLoginPage(appConfig, currentPage, HTMLElements);
            } catch (error) {
                errorHandler(error, 'createLogoutListener');
            }
        },
        querySelector: document.querySelector('#logout'),
        type: 'click'
    };
    const { callback, querySelector, type } = logoutOption;
    createNewListener(querySelector, callback, type);
};

export default createLogoutListener;
