import createEventCreatorListener from '../../../utils/Listeners/Event/Event-Creator/eventCreatorListener';
import createEventForm from '../../../templates/Form/EventForm/eventForm';
import createNewForm from '../../../templates/Form/form';
import createLogoutListener from '../../../utils/Listeners/Menu/logoutListener';
import createProfileListener from '../../../utils/Listeners/Menu/profileListener';
//import createUploadImageListener from '../../../utils/Listeners/Image/Upload-Image/uploadImageListener';
import createUserNavBar from '../../../templates/Navbar/userNavbar';
import dropdownMenuToggle from '../../../utils/Toggle/dropdownMenuToggle';
import errorHandler from '../../../utils/Error/errorHandler';
import querySelectorChecker from '../../../utils/QuerySelector/querySelectorChecker';

const printEventCreator = (appConfig, currentPage, HTMLElements) => {
    const { headerClassName, mainClassName } = appConfig;

    try {
        const header = querySelectorChecker(`.${headerClassName}`, appConfig, 'printEventCreator', `El HTMLElement de className .${headerClassName} no se ha encontrado`, HTMLElements);
        header.innerHTML += createUserNavBar(`${headerClassName}-nav`, currentPage, 'random_user');

        dropdownMenuToggle(`${headerClassName}-nav`, appConfig, HTMLElements);
        createLogoutListener(appConfig, currentPage, HTMLElements);
        createProfileListener(appConfig, currentPage, HTMLElements);

        const main = querySelectorChecker(`.${mainClassName}`, appConfig, 'printEventCreator', `El HTMLElement de className .${mainClassName} no se ha encontrado`, HTMLElements);
        main.innerHTML += createNewForm(`${mainClassName}-${currentPage}_form`, `${createEventForm(`${mainClassName}-${currentPage}_form-fields`, currentPage)}`);

        //createUploadImageListener(appConfig, currentPage, HTMLElements);

        createEventCreatorListener(appConfig, currentPage, HTMLElements);

        return main;
    } catch (error) {
        errorHandler(error, 'printEventCreator');
    }
};

export default printEventCreator;