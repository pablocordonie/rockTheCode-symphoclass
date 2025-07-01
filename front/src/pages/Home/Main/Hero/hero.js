import createHeroContent from '../../../../components/List/Home/Hero/hero';
import createHeroListItem from '../../../../components/Item/Home/Hero/hero';
import createHeroOverlay from '../../../../components/Div/Hero/hero';
import createHeroSection from '../../../../components/Section/Hero/hero';
import createHeroSignup from '../../../../components/Anchor/Signup/Hero/signup';
import createHeroSignupBtn from '../../../../components/Button/Home/Hero/hero';
import createHeroSubtitle from '../../../../components/Paragraph/Home/Hero/hero';
import createHeroTitle from '../../../../components/Title/H2/Hero/hero';

const createHomeHeroSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;
    const heroTags = [];

    const heroSection = createHeroSection(`${mainClassName}-${currentPage}-hero`);

    const heroContent = createHeroContent(`${heroSection.className}-content`);
    heroSection.appendChild(heroContent);

    const heroTitle = createHeroTitle(`${heroSection.className}-title`, 'Conecta con la Maestría');
    heroTags.push(heroTitle);

    const heroSubtitle = createHeroSubtitle(`${heroSection.className}-subtitle`, 'Encuentra los mejores talleres para aprender con los mejores artistas del mundo');
    heroTags.push(heroSubtitle);

    const heroSignupAnchor = createHeroSignup(`${heroSection.className}-signup`, '#signup');
    heroTags.push(heroSignupAnchor);

    const heroSignupButton = createHeroSignupBtn(`${heroSignupAnchor.className}-btn`, 'Apúntate');
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