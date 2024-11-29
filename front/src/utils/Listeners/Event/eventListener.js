import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import errorHandler from '../../Error/errorHandler';
import launchEventCreatorPage from '../../Launcher/Event-Creator/launchEventCreator';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import toggleClass from '../../Toggle/toggleClass';

const createEventListener = (appConfig, currentPage, HTMLElements) => {
    const { headerClassName, mainClassName } = appConfig;

    const createNewEventButton = {
        callback: (event) => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, createNewEventButton);

            const header = querySelectorChecker(`.${headerClassName}-events`, appConfig, 'createEventListener', `El HTMLElement de className .${headerClassName} no se ha encontrado`, HTMLElements);
            activateHeaderCleaner(header);
            toggleClass(header, `${headerClassName}`, currentPage);

            const main = querySelectorChecker(`.${mainClassName}-events`, appConfig, 'createEventListener', `El HTMLElement de className .${mainClassName} no se ha encontrado`, HTMLElements);
            activateContentCleaner(main);
            toggleClass(main, `${mainClassName}`, currentPage);

            try {
                event.preventDefault();
                launchEventCreatorPage(appConfig, currentPage, HTMLElements);
            } catch (error) {
                errorHandler(error, 'createEventListener');
            }
        },
        querySelector: querySelectorChecker(`.${headerClassName}-events-create_btn`, appConfig, 'createEventListener', `El HTMLElement de className .${headerClassName}-events-create_btn no se ha encontrado`, HTMLElements),
        type: 'click'
    };
    const { callback, querySelector, type } = createNewEventButton;
    createNewListener(querySelector, callback, type);
};

export default createEventListener;