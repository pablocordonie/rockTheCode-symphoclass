import createNewContainer from '../../../../components/Div/div';
import createNewH2Title from '../../../../components/Title/H2/h2';
import createNewH3Title from '../../../../components/Title/H3/h3';
import createNewIcon from '../../../../components/Icon/icon';
import createNewParagraph from '../../../../components/Paragraph/paragraph';
import createNewSection from '../../../../components/Section/section';

const createHeroFeaturesSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const featuresSection = createNewSection(`${mainClassName}-${currentPage}-features`, 'features');

    const featuresTitle = createNewH2Title(`${featuresSection.className}-title`, 'Why Choose The SymphoClass');
    featuresSection.appendChild(featuresTitle);

    const featuresGrid = createNewContainer(`${featuresSection.className}-grid`);
    featuresSection.appendChild(featuresGrid);

    const features = [
        {
            icon: 'fa-music',
            title: 'Expert Instructors',
            paragraph: 'Connect with renowned musicians and educators from prestigious institutions worldwide'
        }, {
            icon: 'fa-calendar-check',
            title: 'Easy Scheduling',
            paragraph: 'Book masterclasses that fit your schedule with our intuitive calendar system'
        }, {
            icon: 'fa-globe',
            title: 'Global Community',
            paragraph: 'Join a worldwide network of musicians, students, and educators passionate about music'
        }, {
            icon: 'fa-graduation-cap',
            title: 'Personalized Learning',
            paragraph: 'Receive tailored instruction that addresses your specific musical goals and challenges'
        }
    ];

    features.forEach(feature => {
        const featureCard = createNewContainer(`${mainClassName}-${currentPage}-feature-card`);
        featuresGrid.appendChild(featureCard);

        const featureIcon = createNewIcon(`fa-solid ${feature.icon} ${mainClassName}-${currentPage}-feature-icon`);
        featureCard.appendChild(featureIcon);

        const featureTitle = createNewH3Title(`${mainClassName}-${currentPage}-feature-title`, feature.title);
        featureCard.appendChild(featureTitle);

        const featureParagraph = createNewParagraph(`${mainClassName}-${currentPage}-feature-paragraph`, feature.paragraph);
        featureCard.appendChild(featureParagraph);
    });

    return featuresSection;
};

export default createHeroFeaturesSection;