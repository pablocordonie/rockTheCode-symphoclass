import activatePageCleaner from '../../../../utils/Cleaner/pageCleaner';
import createListenerConstructor from '../../Listener/Constructor/listener';
import createNewListener from '../../Listener/newListener';
import errorHandler from '../../../../utils/Error/errorHandler';
import launchNewPage from '../../../../utils/Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';
import testCards from '../../../Data/testCards';

const createNewEventListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;
    const context = 'createNewEventListener';

    const callback = (event) => {
        try {
            event.preventDefault();

            const header = querySelectorChecker(`.${headerClassName}`, 'createNewEventListener');

            const main = querySelectorChecker(`.${mainClassName}`, 'createNewEventListener');
            activatePageCleaner(header, main);

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
            return errorHandler(error, 'createNewEventListener', appConfig, HTMLElementsWithListeners, 'critical');
        }
    };

    const newEventListener = createListenerConstructor(`.${mainClassName}-${currentPage}_form-${currentPage}_button`, context, callback, 'click');

    createNewListener(newEventListener, appConfig, HTMLElementsWithListeners, context);
};

export default createNewEventListener;