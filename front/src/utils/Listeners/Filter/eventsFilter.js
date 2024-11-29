import activateContentCleaner from '../../../utils/Cleaner/contentCleaner';
import createEventsList from '../../../templates/Event/List/eventsList';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import errorHandler from '../../Error/errorHandler';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';
import testCards from '../../../../testCards';

const createEventsFilter = (className, appConfig, HTMLElements) => {
    const { mainClassName } = appConfig;

    const eventsInput = {
        callback: (event) => {
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, eventsInput);

            const main = querySelectorChecker(`.${mainClassName}-events`, appConfig, 'createEventsFilter', `El HTMLElement de className .${mainClassName}-events no se ha encontrado`, HTMLElements);
            activateContentCleaner(main);

            try {
                if (testCards.length) {
                    const filteredCards = testCards.filter(card => card.title.toLowerCase().includes(event.target.value));
                    main.innerHTML = createEventsList(main.className, filteredCards);
                }
            } catch (error) {
                errorHandler(error, 'createEventsFilter');
            }
        },
        querySelector: document.querySelector(`.${className}-search`),
        type: 'input'
    };
    const { callback, querySelector, type } = eventsInput;
    createNewListener(querySelector, callback, type);
};

export default createEventsFilter;