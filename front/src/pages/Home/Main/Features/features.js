import createFeatureCard from '../../../../components/Item/Features/features';
import createFeatureIcon from '../../../../components/Icon/Features/features';
import createFeatureParagraph from '../../../../components/Paragraph/Features/features';
import createFeatureTitle from '../../../../components/Title/H3/Features/features';
import createFeaturesGrid from '../../../../components/List/Features/features';
import createFeaturesSection from '../../../../components/Section/Features/features';
import createFeaturesTitle from '../../../../components/Title/H2/Features/features';
import { homeFeatures } from '../../../../config/config';

const createHomeFeaturesSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const featuresSection = createFeaturesSection(`${mainClassName}-${currentPage}-features`, 'features');

    const featuresTitle = createFeaturesTitle(`${featuresSection.className}-title`, 'Why Choose The SymphoClass');
    featuresSection.appendChild(featuresTitle);

    const featuresGrid = createFeaturesGrid(`${featuresSection.className}-grid`);
    featuresSection.appendChild(featuresGrid);

    homeFeatures.forEach(feature => {
        const featureCard = createFeatureCard(`${mainClassName}-${currentPage}-feature-card`);
        featuresGrid.appendChild(featureCard);

        const featureIcon = createFeatureIcon(`fa-solid ${feature.icon} ${mainClassName}-${currentPage}-feature-icon`);
        featureCard.appendChild(featureIcon);

        const featureTitle = createFeatureTitle(`${mainClassName}-${currentPage}-feature-title`, feature.title);
        featureCard.appendChild(featureTitle);

        const featureParagraph = createFeatureParagraph(`${mainClassName}-${currentPage}-feature-paragraph`, feature.paragraph);
        featureCard.appendChild(featureParagraph);
    });

    return featuresSection;
};

export default createHomeFeaturesSection;