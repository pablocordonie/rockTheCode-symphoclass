import activatePageCleaner from '../../Cleaner/pageCleaner';
import createListenerConstructor from '../Listener/Constructor/listener';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../Error/errorHandler';
import launchNewPage from '../../Launcher/launchNewPage';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import toggleClass from '../../Toggle/toggleClass';

const createEventCreatorPageListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;
    const context = 'createEventCreatorPageListener';

    const callback = event => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}-events`, context);

            const main = querySelectorChecker(`.${mainClassName}-events`, context);
            activatePageCleaner(header, main);

            toggleClass(header, headerClassName, `${headerClassName}-events`);
            toggleClass(main, mainClassName, `${mainClassName}-events`);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'create_event');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const eventCreatorListener = createListenerConstructor(`.${headerClassName}-events-create_btn`, context, callback, 'click');

    createNewListener(eventCreatorListener, appConfig, HTMLElementsWithListeners, context);
};

export default createEventCreatorPageListener;