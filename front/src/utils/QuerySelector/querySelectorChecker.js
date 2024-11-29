import errorHandler from '../Error/errorHandler';

const querySelectorChecker = (className, context, error) => {
    const HTMLElement = document.querySelector(className);

    if (!HTMLElement) {
        errorHandler(error, context);
        return null;
    }

    return HTMLElement;
};

export default querySelectorChecker;