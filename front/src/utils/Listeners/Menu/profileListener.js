import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import errorHandler from '../../Error/errorHandler';
import launchProfilePage from '../../Launcher/Profile/launchProfile';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import toggleClass from '../../Toggle/toggleClass';

const createProfileListener = (appConfig, currentPage, HTMLElements) => {
    const { headerClassName, mainClassName } = appConfig;

    const editOption = {
        callback: () => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, editOption);

            if (currentPage === 'events') {
                const eventsHeader = querySelectorChecker(`.${headerClassName}-events`, appConfig, 'createProfileListener', `El HTMLElement de className .${headerClassName}-events no se ha encontrado`, HTMLElements);
                toggleClass(eventsHeader, `${headerClassName}`, currentPage);
                activateHeaderCleaner(eventsHeader);

                const eventsMain = querySelectorChecker(`.${mainClassName}-events`, appConfig, 'createProfileListener', `El HTMLElement de className .${mainClassName}-events no se ha encontrado`, HTMLElements);
                toggleClass(eventsMain, `${mainClassName}`, currentPage);
                activateContentCleaner(eventsMain);
            } else {
                const header = querySelectorChecker(`.${headerClassName}`, appConfig, 'createProfileListener', `El HTMLElement de className .${headerClassName} no se ha encontrado`, HTMLElements);
                activateHeaderCleaner(header);

                const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'createProfileListener', `El HTMLElement de className .${mainClassName} no se ha encontrado`, HTMLElements);
                activateContentCleaner(main);
            }

            try {
                launchProfilePage(appConfig, currentPage, HTMLElements);
            } catch (error) {
                errorHandler(error, 'createProfileListener');
            }
        },
        querySelector: document.querySelector('#edit-profile'),
        type: 'click'
    };
    const { callback, querySelector, type } = editOption;
    createNewListener(querySelector, callback, type);
};

export default createProfileListener;