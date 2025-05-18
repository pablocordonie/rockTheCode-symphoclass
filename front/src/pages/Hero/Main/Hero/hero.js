import createNewAnchor from '../../../../components/Anchor/anchor';
import createNewButton from '../../../../components/Button/button';
import createNewContainer from '../../../../components/Div/div';
import createNewH2Title from '../../../../components/Title/H2/h2';
import createNewParagraph from '../../../../components/Paragraph/paragraph';
import createNewSection from '../../../../components/Section/section';

const createHeroSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const heroSection = createNewSection(`${mainClassName}-${currentPage}-section`);

    const heroContent = createNewContainer(`${heroSection.className}-content`);
    heroSection.appendChild(heroContent);

    const heroTitle = createNewH2Title(`${heroSection.className}-title`, 'Connect with the Best Music Teachers');
    heroContent.appendChild(heroTitle);

    const heroSubtitle = createNewParagraph(`${heroSection.className}-subtitle`, 'Find and book masterclasses with the best musicians of the world');
    heroContent.appendChild(heroSubtitle);
    /*
    const heroCTAContent = createNewContainer(`${heroSection.className}-cta`);
    heroContent.appendChild(heroCTAContent);
    */
    const heroSignupAnchor = createNewAnchor(`${/*heroCTAContent.c*/heroSection.className}-cta-signup`, '#signup');
    heroContent.appendChild(heroSignupAnchor);

    const heroSignupButton = createNewButton(`${heroSignupAnchor.className}-button`, 'Sign Up');
    heroSignupAnchor.appendChild(heroSignupButton);

    const heroOverlay = createNewContainer(`${heroSection.className}-overlay`);
    heroSection.appendChild(heroOverlay);

    return heroSection;
};

export default createHeroSection;