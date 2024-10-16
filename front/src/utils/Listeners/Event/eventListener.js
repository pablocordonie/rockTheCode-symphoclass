import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import createNewListener from '../Listener/createNewListener';
import launchEventCreatorPage from '../../Launcher/Event-Creator/launchEventCreator';
import recalculateBodyHeight from '../../Height/recalculateBodyHeight';

const createEventListener = (appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName) => {
    const createNewEventButton = {
        callback: () => {
            bodyHeight = 125;
            recalculateBodyHeight(bodyHeight);

            HTMLElements.push(createNewEventButton);

            const header = document.querySelector('.sc-events-header');
            header.className = 'sc-header';
            activateHeaderCleaner(header);

            const main = document.querySelector('.sc-events-main-list');
            main.className = 'sc-main';
            activateContentCleaner(main);

            launchEventCreatorPage(appId, bodyHeight, currentPage, footerClassName, HTMLElements, loaderClassName, webContentClassName);
        },
        querySelector: document.querySelector('.sc-events-header-create_btn'),
        type: 'click'
    };
    const { callback, querySelector, type } = createNewEventButton;
    createNewListener(querySelector, callback, type);
};

export default createEventListener;