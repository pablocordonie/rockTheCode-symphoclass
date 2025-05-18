import createHeroAboutSection from './About/about';
import createHeroCtaSection from './Cta/cta';
import createHeroFeaturesSection from './Features/features';
import createHeroSection from './Hero/hero';
import createHeroTestimonialsSection from './Testimonials/testimonials';
import createNewContainer from '../../../components/Div/div';

const createHeroMainContent = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const heroMainContent = createNewContainer(`${mainClassName}-${currentPage}`);

    const heroSection = createHeroSection(appConfig, currentPage);
    heroMainContent.appendChild(heroSection);

    const featuresSection = createHeroFeaturesSection(appConfig, currentPage);
    heroMainContent.appendChild(featuresSection);

    const testimonialsSection = createHeroTestimonialsSection(appConfig, currentPage);
    heroMainContent.appendChild(testimonialsSection);

    const aboutSection = createHeroAboutSection(appConfig, currentPage);
    heroMainContent.appendChild(aboutSection);

    const ctaSection = createHeroCtaSection(appConfig, currentPage);
    heroMainContent.appendChild(ctaSection);

    return heroMainContent;
};

export default createHeroMainContent;