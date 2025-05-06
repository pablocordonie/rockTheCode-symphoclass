import createHeroContent from '../../../../components/Hero/hero';
import createHeroCTAContainer from '../../../../components/CTA/cta';
import createHeroOverlay from '../../../../components/Overlay/overlay';
import createNewAnchor from '../../../../components/Anchor/anchor';
import createNewButton from '../../../../components/Button/button';
import createNewH2Title from '../../../../components/Title/H2/h2';
import createNewParagraph from '../../../../components/Paragraph/paragraph';
import createNewSection from '../../../../components/Section/section';

const createHeroSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const heroSection = createNewSection(`${mainClassName}-${currentPage}`);

    const heroContent = createHeroContent(`${heroSection.className}-content`);
    heroSection.appendChild(heroContent);

    const heroTitle = createNewH2Title(`${heroSection.className}-title`, 'Connect with the Best Music Teachers');
    heroContent.appendChild(heroTitle);

    const heroSubtitle = createNewParagraph(`${heroSection.className}-subtitle`, 'Find and book masterclasses with the best musicians of the world');
    heroContent.appendChild(heroSubtitle);

    const heroCTAContainer = createHeroCTAContainer(`${heroSection.className}-cta`);
    heroContent.appendChild(heroCTAContainer);

    const heroSignupAnchor = createNewAnchor(`${heroCTAContainer.className}-signup`, '#signup');
    heroCTAContainer.appendChild(heroSignupAnchor);

    const heroSignupButton = createNewButton(`${heroSignupAnchor.className}-button`, 'Sign Up');
    heroSignupButton.classList.add(`${heroSignupButton.className}-primary`);
    heroSignupAnchor.appendChild(heroSignupButton);

    const heroInfoAnchor = createNewAnchor(`${heroCTAContainer.className}-info`, '#learn-more');
    heroCTAContainer.appendChild(heroInfoAnchor);

    const heroInfoButton = createNewButton(`${heroInfoAnchor.className}-button`, 'Learn More');
    heroInfoButton.classList.add(`${heroInfoButton.className}-secondary`);
    heroInfoAnchor.appendChild(heroInfoButton);

    const heroOverlay = createHeroOverlay(`${heroSection.className}-overlay`);
    heroSection.appendChild(heroOverlay);

    return heroSection;
};

export default createHeroSection;