import createCtaContent from '../../../../components/List/Home/Cta/cta';
import createCtaItem from '../../../../components/Item/Home/Cta/cta';
import createCtaParagraph from '../../../../components/Paragraph/Home/Cta/cta';
import createCtaSection from '../../../../components/Section/Cta/cta';
import createCtaSignup from '../../../../components/Anchor/Signup/Cta/signup';
import createCtaSignupButton from '../../../../components/Button/Home/Cta/cta';
import createCtaTitle from '../../../../components/Title/H2/Cta/cta';

const createHomeCtaSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;
    const ctaTags = [];

    const ctaSection = createCtaSection(`${mainClassName}-${currentPage}-cta`, 'signup');

    const ctaContent = createCtaContent(`${ctaSection.className}-content`);
    ctaSection.appendChild(ctaContent);

    const ctaTitle = createCtaTitle(`${ctaSection.className}-title`, 'Estás list@ para empezar tu trayectoria musical?');
    ctaTags.push(ctaTitle);

    const ctaParagraph = createCtaParagraph(`${ctaSection.className}-paragraph`, 'Únete a miles de artistas de todo el mundo que aprenden cada día con The SymphoClass');
    ctaTags.push(ctaParagraph);

    const ctaSignupAnchor = createCtaSignup(`${ctaSection.className}-signup`, '#register');
    ctaTags.push(ctaSignupAnchor);

    ctaTags.forEach(tag => {
        const ctaItem = createCtaItem(`${ctaSection.className}-item`);
        ctaContent.appendChild(ctaItem);

        ctaItem.appendChild(tag);
    });

    const ctaSignupButton = createCtaSignupButton(`${ctaSignupAnchor.className}-btn`, 'Regístrate');
    ctaSignupAnchor.appendChild(ctaSignupButton);

    return ctaSection;
};

export default createHomeCtaSection;