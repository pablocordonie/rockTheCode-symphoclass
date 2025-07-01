import activatePageCleaner from '../../../Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/constructor';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../Error/errorHandler';
import launchNewPage from '../../../Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';
import testCards from '../../../Data/testCards';

const createNewEventListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { footerClassName, headerClassName, mainClassName, tscClassName } = appConfig;
    const context = 'createNewEventListener';

    const callback = (event) => {
        try {
            event.preventDefault();

            const eventCreatorContent = querySelectorChecker(`.${tscClassName}-event`);
            eventCreatorContent.remove();

            const header = querySelectorChecker(`.${headerClassName}`, context);

            const main = querySelectorChecker(`.${mainClassName}`, context);

            const footer = querySelectorChecker(`.${footerClassName}`, context);
            activatePageCleaner(header, main, footer);

            /* SIMULADOR DE CREACIÓN DE EVENTOS */
            const newEvent = {
                id: testCards.length + 1,
                address: 'Calle Albasanz, 2, 28037 Madrid',
                center: 'Escuela de Música Joaquín Turina',
                date: '20 de Septiembre, 2025',
                title: `Evento ${testCards.length + 1}`,
            };
            testCards.push(newEvent);

            launchNewPage(appConfig, currentPage, HTMLElementsWithListeners, 'events');
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const newEventListener = createListenerConstructor(`.${tscClassName}-event-form-submit-btn`, context, callback, 'click');

    createNewListener(newEventListener, appConfig, HTMLElementsWithListeners, context);
};

export default createNewEventListener;