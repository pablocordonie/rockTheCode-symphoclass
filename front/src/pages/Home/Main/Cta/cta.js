import createCtaContent from '../../../../components/List/Cta/cta';
import createCtaItem from '../../../../components/Item/Cta/cta';
import createCtaParagraph from '../../../../components/Paragraph/Cta/cta';
import createCtaSection from '../../../../components/Section/Cta/cta';
import createCtaSignup from '../../../../components/Anchor/Signup/Cta/signup';
import createCtaSignupButton from '../../../../components/Button/Signup/Cta/signup';
import createCtaTitle from '../../../../components/Title/H2/Cta/cta';

const createHomeCtaSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;
    const ctaTags = [];

    const ctaSection = createCtaSection(`${mainClassName}-${currentPage}-cta`, 'signup');

    const ctaContent = createCtaContent(`${ctaSection.className}-content`);
    ctaSection.appendChild(ctaContent);

    const ctaTitle = createCtaTitle(`${ctaSection.className}-title`, 'Ready to Start Your Musical Journey?');
    ctaTags.push(ctaTitle);

    const ctaParagraph = createCtaParagraph(`${ctaSection.className}-paragraph`, 'Join thousands of musicians who are already using SymphoClass to teach and learn');
    ctaTags.push(ctaParagraph);

    const ctaSignupAnchor = createCtaSignup(`${ctaSection.className}-signup`, '#register');
    ctaTags.push(ctaSignupAnchor);

    ctaTags.forEach(tag => {
        const ctaItem = createCtaItem(`${ctaSection.className}-item`);
        ctaContent.appendChild(ctaItem);

        ctaItem.appendChild(tag);
    });

    const ctaSignupButton = createCtaSignupButton(`${ctaSignupAnchor.className}-btn`, 'Create Account');
    ctaSignupAnchor.appendChild(ctaSignupButton);

    return ctaSection;
};

export default createHomeCtaSection;