import createHeroContent from '../../../../components/List/Hero/hero';
import createHeroListItem from '../../../../components/Item/Hero/hero';
import createHeroOverlay from '../../../../components/Div/Hero/hero';
import createHeroSection from '../../../../components/Section/Hero/hero';
import createHeroSignup from '../../../../components/Anchor/Signup/Hero/signup';
import createHeroSignupBtn from '../../../../components/Button/Signup/Hero/signup';
import createHeroSubtitle from '../../../../components/Paragraph/Hero/hero';
import createHeroTitle from '../../../../components/Title/H2/Hero/hero';

const createHomeHeroSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;
    const heroTags = [];

    const heroSection = createHeroSection(`${mainClassName}-${currentPage}-hero`);

    const heroContent = createHeroContent(`${heroSection.className}-content`);
    heroSection.appendChild(heroContent);

    const heroTitle = createHeroTitle(`${heroSection.className}-title`, 'Connect with the Best Music Teachers');
    heroTags.push(heroTitle);

    const heroSubtitle = createHeroSubtitle(`${heroSection.className}-subtitle`, 'Find and book masterclasses with the best musicians of the world');
    heroTags.push(heroSubtitle);

    const heroSignupAnchor = createHeroSignup(`${heroSection.className}-signup`, '#signup');
    heroTags.push(heroSignupAnchor);

    const heroSignupButton = createHeroSignupBtn(`${heroSignupAnchor.className}-btn`, 'Sign Up');
    heroSignupAnchor.appendChild(heroSignupButton);

    heroTags.forEach(tag => {
        const heroItem = createHeroListItem(`${heroSection.className}-item`);
        heroContent.appendChild(heroItem);

        heroItem.appendChild(tag);
    });

    const heroOverlay = createHeroOverlay(`${heroSection.className}-overlay`);
    heroSection.appendChild(heroOverlay);

    return heroSection;
};

export default createHomeHeroSection;