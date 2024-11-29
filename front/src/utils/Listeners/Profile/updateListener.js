import activateContentCleaner from '../../../utils/Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../utils/Cleaner/headerCleaner';
import createNewListener from '../../../utils/Listeners/Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../utils/Filter/duplicatesRemover';
import errorHandler from '../../../utils/Error/errorHandler';
import launchEventsPage from '../../../utils/Launcher/Events-List/launchEventsList';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';

const createUpdateProfileListener = (appConfig, currentPage, HTMLElements) => {
    const { headerClassName, mainClassName } = appConfig;

    const updateButton = {
        callback: (event) => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, updateButton);

            const header = querySelectorChecker(`.${headerClassName}`, appConfig, 'createUpdateProfileListener', `El HTMLElement de className .${headerClassName} no se ha encontrado`, HTMLElements);
            activateHeaderCleaner(header);

            const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'createUpdateProfileListener', `El HTMLElement de className .${mainClassName} no se ha encontrado`, HTMLElements);
            activateContentCleaner(main);

            try {
                event.preventDefault();
                launchEventsPage(appConfig, currentPage, HTMLElements);
            } catch (error) {
                errorHandler(error, 'createUpdateProfileListener');
            }
        },
        querySelector: querySelectorChecker(`.${mainClassName}-${currentPage}_form-${currentPage}_button`, appConfig, 'createUpdateProfileListener', `El HTMLElement de className .${mainClassName}-${currentPage}_form-${currentPage}_button no se ha encontrado`, HTMLElements),
        type: 'click'
    }
    const { callback, querySelector, type } = updateButton;
    createNewListener(querySelector, callback, type);
};

export default createUpdateProfileListener;