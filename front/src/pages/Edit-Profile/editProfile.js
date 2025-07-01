import createEditProfileHeaderContent from './Header/header';
import createEditProfileMainContent from './Main/main';
import createImageSelectorListener from '../../utils/Listeners/Edit-Profile/imageSelector';
import createUpdateProfileListener from '../../utils/Listeners/Profile/updateProfile';
import createUploadImageListener from '../../utils/Listeners/Image/uploadImage';
import errorHandler from '../../utils/Error/errorHandler';
import querySelectorChecker from '../../utils/QuerySelector/querySelectorChecker';

const printEditProfileForm = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName, tscClassName } = appConfig;
    const context = 'printEditProfileForm';

    try {
        const tsc = querySelectorChecker(`.${tscClassName}`, context);
        tsc.classList.add(`${tscClassName}-flex`);

        const header = querySelectorChecker(`.${headerClassName}`, context);
        header.classList.add(`${headerClassName}-flex`);

        const headerContent = createEditProfileHeaderContent(appConfig);
        header.appendChild(headerContent);

        const main = querySelectorChecker(`.${mainClassName}`, context);

        const mainContent = createEditProfileMainContent(appConfig, currentPage);
        main.appendChild(mainContent);

        createImageSelectorListener(appConfig, currentPage, HTMLElementsWithListeners);
        createUploadImageListener(appConfig, currentPage, HTMLElementsWithListeners);
        createUpdateProfileListener(appConfig, currentPage, HTMLElementsWithListeners);

        return main;
    } catch (error) {
        return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
    }
};

export default printEditProfileForm;