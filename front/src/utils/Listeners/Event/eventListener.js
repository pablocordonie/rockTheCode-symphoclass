import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import createNewListener from '../Listener/createNewListener';
import launchEventCreatorPage from '../../Launcher/Event-Creator/launchEventCreator';

const createEventListener = (appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const createNewEventButton = {
        callback: () => {
            HTMLElements.push(createNewEventButton);

            const header = document.querySelector('.sc-header-events');
            activateHeaderCleaner(header);
            header.className = 'sc-header';

            const main = document.querySelector('.sc-main-events');
            activateContentCleaner(main);
            main.className = 'sc-main';

            launchEventCreatorPage(appId, currentPage, HTMLElements, loaderClassName, mainClassName, scClassName);
        },
        querySelector: document.querySelector('.sc-header-events-create_btn'),
        type: 'click'
    };
    const { callback, querySelector, type } = createNewEventButton;
    createNewListener(querySelector, callback, type);
};

export default createEventListener;