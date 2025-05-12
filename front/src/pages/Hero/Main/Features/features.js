import createNewContainer from '../../../../components/Div/div';
import createNewH2Title from '../../../../components/Title/H2/h2';
import createNewH3Title from '../../../../components/Title/H3/h3';
import createNewIcon from '../../../../components/Icon/icon';
import createNewParagraph from '../../../../components/Paragraph/paragraph';
import createNewSection from '../../../../components/Section/section';

const createHeroFeaturesSection = (appConfig) => {
    const { mainClassName } = appConfig;

    const featuresSection = createNewSection(`${mainClassName}-features`, 'features');

    const featuresTitle = createNewH2Title(`${mainClassName}-section-title`, 'Why Choose The SymphoClass');
    featuresSection.appendChild(featuresTitle);

    const featuresGrid = createNewContainer(`${featuresSection.className}-grid`);
    featuresSection.appendChild(featuresGrid);

    const features = [
        {
            icon: 'fa-music',
            title: 'Expert Instructors',
            description: 'Connect with renowned musicians and educators from prestigious institutions worldwide'
        }, {
            icon: 'fa-calendar-check',
            title: 'Easy Scheduling',
            description: 'Book masterclasses that fit your schedule with our intuitive calendar system'
        }, {
            icon: 'fa-globe',
            title: 'Global Community',
            description: 'Join a worldwide network of musicians, students, and educators passionate about music'
        }, {
            icon: 'fa-graduation-cap',
            title: 'Personalized Learning',
            description: 'Receive tailored instruction that addresses your specific musical goals and challenges'
        }
    ];

    features.forEach(feature => {
        const featureCard = createNewContainer(`${mainClassName}-feature-card`);
        featuresGrid.appendChild(featureCard);

        const featureIcon = createNewIcon(`fa-solid ${feature.icon} ${mainClassName}-feature-icon`);
        featureCard.appendChild(featureIcon);

        const featureTitle = createNewH3Title(`${mainClassName}-feature-title`, feature.title);
        featureCard.appendChild(featureTitle);

        const featureDescription = createNewParagraph(`${mainClassName}-feature-description`, feature.description);
        featureCard.appendChild(featureDescription);
    });

    return featuresSection;
};

export default createHeroFeaturesSection;