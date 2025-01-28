import activatePageCleaner from '../../../../utils/Cleaner/pageCleaner';
import createNewListener from '../../../../utils/Listeners/Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../../utils/Filter/duplicatesRemover';
import errorHandler from '../../../../utils/Error/errorHandler';
import launchNewPage from '../../../../utils/Launcher/launchNewPage';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';
import testCards from '../../../Data/testCards';

const createEventCreatorListener = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    const createEventButton = {
        callback: (event) => {
            try {
                event.preventDefault();

                HTMLElementsWithListeners = duplicatesRemoverIntoArray(HTMLElementsWithListeners, createEventButton);

                const header = querySelectorChecker(`.${headerClassName}`, 'createEventCreatorListener');

                const main = querySelectorChecker(`.${mainClassName}`, 'createEventCreatorListener');
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
                return errorHandler(error, 'createEventCreatorListener');
            }
        },
        querySelector: querySelectorChecker(`.${mainClassName}-${currentPage}_form-${currentPage}_button`, 'createEventCreatorListener'),
        type: 'click'
    }

    const { callback, querySelector, type } = createEventButton;
    createNewListener(querySelector, callback, type);
};

export default createEventCreatorListener;