import activatePageCleaner from '../../Cleaner/pageCleaner';
import createListenerConstructor from '../Listener/Constructor/constructor';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';

const createEditProfileListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName, tscClassName } = appConfig;
    const context = 'createEditProfileListener';

    const callback = () => {
        try {
            const eventCreatorContent = querySelectorChecker(`.${tscClassName}-event`);
            eventCreatorContent.remove();

            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);

            activatePageCleaner(appConfig, currentPage, header, main, footer);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'edit_profile');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const editProfileListener = createListenerConstructor('#edit-profile', context, callback, 'click');

    createNewListener(editProfileListener, appConfig, HTMLElementsWithListeners, context);
};

export default createEditProfileListener;