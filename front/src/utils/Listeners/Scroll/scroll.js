import createListenerConstructor from '../Listener/Constructor/listener';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../Error/errorHandler';
import querySelectorChecker from '../../QuerySelector/querySelectorChecker';

const scrollToAnchor = (appConfig, HTMLElementsWithListeners) => {
    const anchors = Array.from(document.querySelectorAll('a'));

    let anchorListener = {};
    const context = 'scrollToAnchor';

    anchors.forEach(anchor => {
        try {
            const callback = (event) => {
                event.preventDefault();

                const target = querySelectorChecker(anchor.getAttribute('href'), context);
                target.scrollIntoView({
                    behavior: "smooth",
                });
            };

            anchorListener = createListenerConstructor(`.${anchor.className}`, context, callback, 'click');
            createNewListener(anchorListener, appConfig, HTMLElementsWithListeners, context);
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
        }
    });
};

export default scrollToAnchor;