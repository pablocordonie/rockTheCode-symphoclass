import createHomeAboutSection from './About/about';
import createHomeCtaSection from './Cta/cta';
import createHomeFeaturesSection from './Features/features';
import createHomeHeroSection from './Hero/hero';
import createHomeTestimonialsSection from './Testimonials/testimonials';

const createHomeMain = (mainSelector, appConfig, currentPage) => {
    const heroSection = createHomeHeroSection(appConfig, currentPage);
    mainSelector.appendChild(heroSection);

    const featuresSection = createHomeFeaturesSection(appConfig, currentPage);
    mainSelector.appendChild(featuresSection);

    const testimonialsSection = createHomeTestimonialsSection(appConfig, currentPage);
    mainSelector.appendChild(testimonialsSection);

    const aboutSection = createHomeAboutSection(appConfig, currentPage);
    mainSelector.appendChild(aboutSection);

    const ctaSection = createHomeCtaSection(appConfig, currentPage);
    mainSelector.appendChild(ctaSection);
};

export default createHomeMain;