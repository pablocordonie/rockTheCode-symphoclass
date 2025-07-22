import createAuthOptionBtn from '../../../../components/Button/Auth/Option/option';
import createAuthOptionParagraph from '../../../../components/Paragraph/Auth/Option/option';
import createHeroContent from '../../../../components/List/Home/Main/Hero/hero';
import createHeroLoginAnchor from '../../../../components/Anchor/Signup/Hero/Login/login';
import createHeroLoginContent from '../../../../components/Div/Home/Hero/Login/login';
import createHeroItem from '../../../../components/Item/Home/Main/Hero/hero';
import createHeroOverlay from '../../../../components/Div/Home/Hero/hero';
import createHeroSection from '../../../../components/Section/Hero/hero';
import createHeroSignup from '../../../../components/Anchor/Signup/Hero/hero';
import createHeroSignupBtn from '../../../../components/Button/Home/Signup/Hero/hero';
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

    const heroLoginContent = createHeroLoginContent(`${heroSection.className}-login-content`);
    heroTags.push(heroLoginContent);

    const heroLoginParagraph = createAuthOptionParagraph(`${heroSection.className}-login-message`, '¿Ya estás registrado en The SymphoClass?');
    heroLoginContent.appendChild(heroLoginParagraph);

    const heroLoginAnchor = createHeroLoginAnchor(`${heroSection.className}-login-anchor`, '#login');
    heroLoginContent.appendChild(heroLoginAnchor);

    const heroLoginBtn = createAuthOptionBtn(`${heroSection.className}-login-btn`, 'Iniciar sesión');
    heroLoginAnchor.appendChild(heroLoginBtn);

    heroTags.forEach(tag => {
        const heroItem = createHeroItem(`${heroSection.className}-item`);
        heroContent.appendChild(heroItem);

        heroItem.appendChild(tag);
    });

    const heroOverlay = createHeroOverlay(`${heroSection.className}-overlay`);
    heroSection.appendChild(heroOverlay);

    return heroSection;
};

export default createHomeHeroSection;