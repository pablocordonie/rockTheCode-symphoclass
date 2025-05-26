import createAboutContent from '../../../../components/List/About/about';
import createAboutInfo from '../../../../components/List/About/Info/info';
import createAboutInfoParagraph from '../../../../components/Paragraph/About/Info/info';
import createAboutItem from '../../../../components/Item/About/about';
import createAboutLabel from '../../../../components/Paragraph/About/Stats/Label/label';
import createAboutNumber from '../../../../components/Paragraph/About/Stats/Number/number';
import createAboutSection from '../../../../components/Section/About/about';
import createAboutStat from '../../../../components/Item/About/Stats/stats';
import createAboutStats from '../../../../components/List/About/Stats/stats';
import createAboutTeamContent from '../../../../components/List/About/Team/team';
import createAboutTeamMemberItem from '../../../../components/Item/About/Team/team';
import createAboutTeamMemberBio from '../../../../components/Paragraph/About/Team/Bio/bio';
import createAboutTeamMemberImage from '../../../../components/Image/Team/team';
import createAboutTeamMemberInfo from '../../../../components/List/About/Team/Member/member';
import createAboutTeamMemberName from '../../../../components/Title/H4/Team/team';
import createAboutTeamMemberRole from '../../../../components/Paragraph/About/Team/Role/role';
import createAboutTitle from '../../../../components/Title/H2/About/about';
import { homeAboutParagraphs, homeAboutStats, homeAboutTeamMembers } from '../../../../config/config';

const createHomeAboutSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const aboutSection = createAboutSection(`${mainClassName}-${currentPage}-about`, 'about');

    const aboutTitle = createAboutTitle(`${aboutSection.className}-title`, 'About Us');
    aboutSection.appendChild(aboutTitle);

    const aboutContent = createAboutContent(`${aboutSection.className}-content`);
    aboutSection.appendChild(aboutContent);

    const aboutInfoItem = createAboutItem(`${aboutSection.className}-item`);
    aboutContent.appendChild(aboutInfoItem);

    const aboutInfo = createAboutInfo(`${aboutSection.className}-info`);
    aboutInfoItem.appendChild(aboutInfo);

    homeAboutParagraphs.forEach(paragraph => {
        const aboutParagraphItem = createAboutItem(`${aboutInfo.className}-item`);
        aboutInfo.appendChild(aboutParagraphItem);

        const aboutInfoParagraph = createAboutInfoParagraph(`${aboutInfo.className}-paragraph`, paragraph.text);
        aboutParagraphItem.appendChild(aboutInfoParagraph);
    });

    const aboutStatsItem = createAboutItem(`${aboutSection.className}-item`);
    aboutContent.appendChild(aboutStatsItem);

    const aboutStats = createAboutStats(`${aboutSection.className}-stats`);
    aboutStatsItem.appendChild(aboutStats);

    homeAboutStats.forEach(stat => {
        const aboutStat = createAboutStat(`${aboutSection.className}-stat`);
        aboutStats.appendChild(aboutStat);

        const aboutNumber = createAboutNumber(`${aboutStat.className}-number`, stat.number);
        aboutStat.appendChild(aboutNumber);

        const aboutLabel = createAboutLabel(`${aboutStat.className}-label`, stat.label);
        aboutStat.appendChild(aboutLabel);
    });

    const aboutTeamTitle = createAboutTitle(`${aboutSection.className}-title`, 'Our Team');
    aboutSection.appendChild(aboutTeamTitle);

    const aboutTeamContent = createAboutTeamContent(`${aboutSection.className}-team`);
    aboutSection.appendChild(aboutTeamContent);

    homeAboutTeamMembers.forEach(member => {
        const teamMemberInfoTags = [];

        const aboutTeamMember = createAboutTeamMemberItem(`${aboutTeamContent.className}-member`);
        aboutTeamContent.appendChild(aboutTeamMember);

        const aboutTeamMemberInfo = createAboutTeamMemberInfo(`${aboutTeamMember.className}-info`);
        aboutTeamMember.appendChild(aboutTeamMemberInfo);

        const aboutTeamMemberImage = createAboutTeamMemberImage(`${aboutTeamMemberInfo.className}-photo`, member.imgSrc, member.name);
        teamMemberInfoTags.push(aboutTeamMemberImage);

        const aboutTeamMemberName = createAboutTeamMemberName(`${aboutTeamMemberInfo.className}-name`, member.name);
        teamMemberInfoTags.push(aboutTeamMemberName);

        const aboutTeamMemberRole = createAboutTeamMemberRole(`${aboutTeamMemberInfo.className}-role`, member.role);
        teamMemberInfoTags.push(aboutTeamMemberRole);

        const aboutTeamMemberBio = createAboutTeamMemberBio(`${aboutTeamMemberInfo.className}-bio`, member.bio);
        teamMemberInfoTags.push(aboutTeamMemberBio);

        teamMemberInfoTags.forEach(tag => {
            const aboutTeamMemberInfoItem = createAboutTeamMemberItem(`${aboutTeamMemberInfo.className}-item`);
            aboutTeamMemberInfo.appendChild(aboutTeamMemberInfoItem);

            aboutTeamMemberInfoItem.appendChild(tag);
        });
    });

    return aboutSection;
};

export default createHomeAboutSection;