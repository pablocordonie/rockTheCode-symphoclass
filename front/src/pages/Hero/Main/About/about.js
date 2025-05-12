import createNewContainer from '../../../../components/Div/div';
import createNewH2Title from '../../../../components/Title/H2/h2';
import createNewH3Title from '../../../../components/Title/H3/h3';
import createNewH4Title from '../../../../components/Title/H4/h4';
import createNewImg from '../../../../components/Image/image';
import createNewParagraph from '../../../../components/Paragraph/paragraph';
import createNewSection from '../../../../components/Section/section';

const createHeroAboutSection = (appConfig) => {
    const { mainClassName } = appConfig;

    const aboutSection = createNewSection(`${mainClassName}-about`, 'about');

    const aboutTitle = createNewH2Title(`${mainClassName}-section-title`, 'About Us');
    aboutSection.appendChild(aboutTitle);

    const aboutContainer = createNewContainer(`${aboutSection.className}-container`);
    aboutSection.appendChild(aboutContainer);

    const aboutContent = createNewContainer(`${aboutSection.className}-content`);
    aboutContainer.appendChild(aboutContent);

    const paragraphs = [
        {
            text: 'Founded in 2020, The SymphoClass was born from a simple idea: to connect passionate music students with world-class instructors regardless of geographical limitations. Our platform bridges the gap between talented musicians seeking knowledge and experienced instructors eager to share their expertise.'
        }, {
            text: 'We believe that quality music education should be accessible to everyone. Our mission is to democratize access to exceptional musical instruction and foster a global community of musicians who inspire and support each other.'
        }
    ];

    paragraphs.forEach(paragraph => {
        const aboutDescription = createNewParagraph(`${aboutSection.className}-description`, paragraph.text);
        aboutContent.appendChild(aboutDescription);
    });

    const aboutStats = createNewContainer(`${aboutSection.className}-stats`);
    aboutContainer.appendChild(aboutStats);

    const stats = [
        {
            number: '5000+',
            label: 'Active Students'
        },
        {
            number: '750+',
            label: 'Expert Instructors'
        },
        {
            number: '45+',
            label: 'Countries Represented'
        }
    ];

    stats.forEach(stat => {
        const aboutStat = createNewContainer(`${aboutSection.className}-stat`);
        aboutStats.appendChild(aboutStat);

        const aboutNumberStat = createNewParagraph(`${aboutStat.className}-number`, stat.number);
        aboutStat.appendChild(aboutNumberStat);

        const aboutLabelStat = createNewParagraph(`${aboutStat.className}-label`, stat.label);
        aboutStat.appendChild(aboutLabelStat);
    });

    const aboutTeamTitle = createNewH3Title(`${mainClassName}-section-title`, 'Our Team');
    aboutSection.appendChild(aboutTeamTitle);

    const aboutTeamContainer = createNewContainer(`${aboutSection.className}-team`);
    aboutSection.appendChild(aboutTeamContainer);

    const teamMembers = [
        {
            name: 'Sofía Martínez',
            imgSrc: '#',
            role: 'Founder & CEO',
            bio: 'Former concert pianist with a passion for music education and technology. Sofía founded The SymphoClass to make quality music instruction accessible worldwide.'
        },
        {
            name: 'David Kim',
            imgSrc: '#',
            role: 'CTO',
            bio: 'Violinist and software engineer who combines his love for music and technology to create innovative solutions for music education.'
        },
        {
            name: 'Emma Johnson',
            imgSrc: '#',
            role: 'Head of Education',
            bio: 'Former professor at Juilliard with over 20 years of experience in music education. Emma ensures the highest quality of instruction on our platform.'
        }
    ];

    teamMembers.forEach(member => {
        const aboutTeamMember = createNewContainer(`${aboutTeamContainer.className}-member`);
        aboutTeamContainer.appendChild(aboutTeamMember);

        const aboutTeamMemberImage = createNewImg(`${aboutTeamMember.className}-photo`, member.imgSrc, member.name);
        aboutTeamMember.appendChild(aboutTeamMemberImage);

        const aboutTeamMemberName = createNewH4Title(`${aboutTeamMember.className}-name`, member.name);
        aboutTeamMember.appendChild(aboutTeamMemberName);

        const aboutTeamMemberRole = createNewParagraph(`${aboutTeamMember.className}-role`, member.role);
        aboutTeamMember.appendChild(aboutTeamMemberRole);

        const aboutTeamMemberBio = createNewParagraph(`${aboutTeamMember.className}-bio`, member.bio);
        aboutTeamMember.appendChild(aboutTeamMemberBio);
    });

    return aboutSection;
};

export default createHeroAboutSection;