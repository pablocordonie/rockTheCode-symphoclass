import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createListenerConstructor = (querySelectorClassName, context, callback, type, scope = document) => {
    const eventListener = {
        querySelector: querySelectorChecker(querySelectorClassName, context, scope),
        callback,
        type
    };
    return eventListener;
};

export default createListenerConstructor;