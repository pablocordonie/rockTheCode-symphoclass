// import createHeroFeaturesSection from './Features/features';
import createHeroSection from './Hero/hero';
import createNewTagTemplate from '../../../components/Tag/tag';

const createHeroMainContent = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const heroMainContent = createNewTagTemplate('div', `${mainClassName}-sections`);

    const heroSection = createHeroSection(appConfig, currentPage);
    heroMainContent.appendChild(heroSection);

    // const featuresContent = createHeroFeaturesSection(appConfig);

    return heroMainContent;
};

export default createHeroMainContent;