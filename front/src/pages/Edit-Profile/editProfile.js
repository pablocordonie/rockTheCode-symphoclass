import createEditProfileBackBtnListener from '../../utils/Listeners/Edit-Profile/Back/back';
import createEditProfileHeaderContent from './Header/header';
import createEditProfileImageListener from '../../utils/Listeners/Image/Edit-Profile/editProfile';
import createEditProfileMainContent from './Main/main';
import createEditProfileImageSelectorListener from '../../utils/Listeners/Edit-Profile/Image/image';
import createUpdateProfileListener from '../../utils/Listeners/Profile/update';
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

        const headerContent = createEditProfileHeaderContent(appConfig, currentPage);
        header.appendChild(headerContent);

        createEditProfileBackBtnListener(appConfig, currentPage, HTMLElementsWithListeners);

        const main = querySelectorChecker(`.${mainClassName}`, context);

        const mainContent = createEditProfileMainContent(appConfig, currentPage);
        main.appendChild(mainContent);

        createEditProfileImageSelectorListener(appConfig, currentPage, HTMLElementsWithListeners);
        createEditProfileImageListener(appConfig, currentPage, HTMLElementsWithListeners);
        // TO-DO: Crear un listener para poder eliminar la imagen de perfil en caso de que el usuario tenga una asignada a su perfil
        createUpdateProfileListener(appConfig, currentPage, HTMLElementsWithListeners);

        return main;
    } catch (error) {
        return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
    }
};

export default printEditProfileForm;