import querySelectorChecker from '../../../QuerySelector/querySelectorChecker';

const createListenerConstructor = (querySelector, context, callback, type, scope = document) => {
    const eventListener = {
        querySelector: querySelectorChecker(querySelector, context, scope),
        callback,
        type
    };
    return eventListener;
};

export default createListenerConstructor;