import createNewAnchor from '../../../../components/Anchor/anchor';
import createNewButton from '../../../../components/Button/button';
import createNewContainer from '../../../../components/Div/div';
import createNewH2Title from '../../../../components/Title/H2/h2';
import createNewParagraph from '../../../../components/Paragraph/paragraph';
import createNewSection from '../../../../components/Section/section';

const createHeroCtaSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const ctaSection = createNewSection(`${mainClassName}-${currentPage}-cta`, 'signup');

    const ctaContent = createNewContainer(`${ctaSection.className}-content`);
    ctaSection.appendChild(ctaContent);

    const ctaTitle = createNewH2Title(`${ctaSection.className}-title`, 'Ready to Start Your Musical Journey?');
    ctaContent.appendChild(ctaTitle);

    const ctaParagraph = createNewParagraph(`${ctaSection.className}-paragraph`, 'Join thousands of musicians who are already using SymphoClass to teach and learn');
    ctaContent.appendChild(ctaParagraph);

    const ctaSignupAnchor = createNewAnchor(`${ctaSection.className}-signup`, '#register');
    ctaContent.appendChild(ctaSignupAnchor);

    const ctaSignupButton = createNewButton(`${ctaSection.className}-signup_button`, 'Create Account');
    ctaSignupAnchor.appendChild(ctaSignupButton);

    return ctaSection;
};

export default createHeroCtaSection;