import activateContentCleaner from '../../Cleaner/contentCleaner';
import activateHeaderCleaner from '../../Cleaner/headerCleaner';
import createNewListener from '../Listener/createNewListener';
import duplicatesRemoverIntoArray from '../../Filter/duplicatesRemover';
import launchEventCreatorPage from '../../Launcher/Event-Creator/launchEventCreator';

const createEventListener = (appConfig, appId, currentPage, headerClassName, HTMLElements, loaderClassName, mainClassName, scClassName) => {
    const createNewEventButton = {
        callback: (event) => {
            event.preventDefault();
            HTMLElements = duplicatesRemoverIntoArray(HTMLElements, createNewEventButton);

            const header = document.querySelector(`.${headerClassName}-events`);
            activateHeaderCleaner(header);
            header.className = `${headerClassName}`;

            const main = document.querySelector(`.${mainClassName}-events`);
            activateContentCleaner(main);
            main.className = `${mainClassName}`;

            launchEventCreatorPage(appConfig, appId, currentPage, HTMLElements, loaderClassName, scClassName);
        },
        querySelector: document.querySelector(`.${headerClassName}-events-create_btn`),
        type: 'click'
    };
    const { callback, querySelector, type } = createNewEventButton;
    createNewListener(querySelector, callback, type);
};

export default createEventListener;