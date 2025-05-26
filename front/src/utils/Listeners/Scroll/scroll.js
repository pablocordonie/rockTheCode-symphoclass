import createListenerConstructor from '../Listener/Constructor/listener';
import createNewListener from '../Listener/newListener';
import errorHandler from '../../Error/errorHandler';

const createAutoScrollToAnchor = (appConfig, HTMLElementsWithListeners) => {
    const anchors = Array.from(document.querySelectorAll('a'));

    let anchorListener = {};
    const context = 'createAutoScrollToAnchor';

    anchors.forEach(anchor => {
        try {
            const callback = (event) => {
                event.preventDefault();

                const target = document.querySelector(anchor.getAttribute('href'));

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            };

            anchorListener = createListenerConstructor(`.${anchor.className}`, context, callback, 'click');
            createNewListener(anchorListener, appConfig, HTMLElementsWithListeners, context);
        } catch (error) {
            return errorHandler(error, context, appConfig, HTMLElementsWithListeners);
        }
    });
};

export default createAutoScrollToAnchor;