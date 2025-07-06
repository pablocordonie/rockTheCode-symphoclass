import createHomeAboutSection from './About/about';
import createHomeCtaSection from './Cta/cta';
import createHomeFeaturesSection from './Features/features';
import createHomeHeroSection from './Hero/hero';
import createHomeTestimonialsSection from './Testimonials/testimonials';
import querySelectorChecker from '../../../utils/QuerySelector/querySelectorChecker';

const createHomeMainContent = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const main = querySelectorChecker(`.${mainClassName}`, 'createHomeMainContent');

    const heroSection = createHomeHeroSection(appConfig, currentPage);
    main.appendChild(heroSection);

    const featuresSection = createHomeFeaturesSection(appConfig, currentPage);
    main.appendChild(featuresSection);

    const testimonialsSection = createHomeTestimonialsSection(appConfig, currentPage);
    main.appendChild(testimonialsSection);

    const aboutSection = createHomeAboutSection(appConfig, currentPage);
    main.appendChild(aboutSection);

    const ctaSection = createHomeCtaSection(appConfig, currentPage);
    main.appendChild(ctaSection);

    return main;
};

export default createHomeMainContent;