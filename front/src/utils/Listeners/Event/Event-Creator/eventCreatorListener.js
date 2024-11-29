import activateContentCleaner from '../../../../utils/Cleaner/contentCleaner';
import activateHeaderCleaner from '../../../../utils/Cleaner/headerCleaner';
import createNewListener from '../../../../utils/Listeners/Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../../../utils/Filter/duplicatesRemover';
import errorHandler from '../../../../utils/Error/errorHandler';
import launchEventsPage from '../../../../utils/Launcher/Events-List/launchEventsList';
import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';
import testCards from '../../../../../testCards';

const createEventCreatorListener = (appConfig, currentPage, HTMLElements) => {
    const { headerClassName, mainClassName } = appConfig;

    const createEventButton = {
        callback: (event) => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, createEventButton);

            const header = querySelectorChecker(`.${headerClassName}`, appConfig, 'createEventCreatorListener', `El HTMLElement de className .${headerClassName} no se ha encontrado`, HTMLElements);
            activateHeaderCleaner(header);

            const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'createEventCreatorListener', `El HTMLElement de className .${mainClassName} no se ha encontrado`, HTMLElements);
            activateContentCleaner(main);

            try {
                event.preventDefault();

                /* SIMULADOR DE CREACIÓN DE EVENTOS */
                const newEvent = {
                    address: 'Calle Albasanz, 2, 28037 Madrid',
                    center: 'Escuela de Música Joaquín Turina',
                    date: '20 de Septiembre, 2025',
                    title: `Evento ${testCards.length + 1}`,
                };
                testCards.push(newEvent);

                launchEventsPage(appConfig, currentPage, HTMLElements);
            } catch (error) {
                errorHandler(error, 'createEventCreatorListener');
            }
        },
        querySelector: querySelectorChecker(`.${mainClassName}-${currentPage}_form-${currentPage}_button`, appConfig, 'createEventCreatorListener', `El HTMLElement de className .${mainClassName}-${currentPage}_form-${currentPage}_button no se ha encontrado`, HTMLElements),
        type: 'click'
    }

    const { callback, querySelector, type } = createEventButton;
    createNewListener(querySelector, callback, type);
};

export default createEventCreatorListener;