import createHeroAboutSection from './About/about';
import createHeroFeaturesSection from './Features/features';
import createHeroSection from './Hero/hero';
import createHeroTestimonialsSection from './Testimonials/testimonials';
import createNewContainer from '../../../components/Div/div';

const createHeroMainContent = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const heroMainContent = createNewContainer(`${mainClassName}-sections`);

    const heroSection = createHeroSection(appConfig, currentPage);
    heroMainContent.appendChild(heroSection);

    const featuresSection = createHeroFeaturesSection(appConfig);
    heroMainContent.appendChild(featuresSection);

    const testimonialsSection = createHeroTestimonialsSection(appConfig);
    heroMainContent.appendChild(testimonialsSection);

    const aboutSection = createHeroAboutSection(appConfig);
    heroMainContent.appendChild(aboutSection);

    return heroMainContent;
};

export default createHeroMainContent;