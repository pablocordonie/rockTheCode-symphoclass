import createEventCreatorListener from '../../../utils/Listeners/Event/Event-Creator/eventCreatorListener';
import createEventForm from '../../../components/Form/EventForm/eventForm';
import createNewForm from '../../../components/Form/form';
import createLogoutListener from '../../../utils/Listeners/Menu/logoutListener';
import createEditProfileListener from '../../../utils/Listeners/Menu/editProfileListener';
import createUploadImageListener from '../../../utils/Listeners/Image/Upload-Image/uploadImageListener';
import createUserNavBar from '../../../components/Navbar/userNavbar';
import dropdownMenuToggle from '../../../utils/Toggle/dropdownMenuToggle';
import errorHandler from '../../../utils/Error/errorHandler';
import querySelectorChecker from '../../../utils/QuerySelector/querySelectorChecker';

const printEventCreatorForm = (appConfig, currentPage, HTMLElementsWithListeners) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, 'printEventCreatorForm');

        const headerNavbar = createUserNavBar(`${headerClassName}-nav`, currentPage, 'random_user');
        header.appendChild(headerNavbar);

        dropdownMenuToggle(`${headerClassName}-nav`, HTMLElementsWithListeners);
        createLogoutListener(appConfig, currentPage, HTMLElementsWithListeners);
        createEditProfileListener(appConfig, currentPage, HTMLElementsWithListeners);

        const main = querySelectorChecker(`.${mainClassName}`, 'printEventCreatorForm');

        const eventCreatorForm = createNewForm(`${mainClassName}-${currentPage}_form`, createEventForm(appConfig, `${mainClassName}-${currentPage}_form-fields`, currentPage));
        main.appendChild(eventCreatorForm);

        createUploadImageListener(appConfig, currentPage, HTMLElementsWithListeners);
        createEventCreatorListener(appConfig, currentPage, HTMLElementsWithListeners);

        return main;
    } catch (error) {
        return errorHandler(error, 'printEventCreatorForm');
    }
};

export default printEventCreatorForm;