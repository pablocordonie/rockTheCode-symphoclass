import createNewContainer from '../../../../components/Div/div';
import createNewH2Title from '../../../../components/Title/H2/h2';
import createNewParagraph from '../../../../components/Paragraph/paragraph';
import createNewSection from '../../../../components/Section/section';

const createHeroTestimonialsSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const testimonialsSection = createNewSection(`${mainClassName}-${currentPage}-testimonials`, 'testimonials');

    const testimonialsTitle = createNewH2Title(`${testimonialsSection.className}-title`, 'What Our Users Say');
    testimonialsSection.appendChild(testimonialsTitle);

    const testimonialsContent = createNewContainer(`${testimonialsSection.className}-content`);
    testimonialsSection.appendChild(testimonialsContent);

    const testimonials = [{
        name: 'María Rodríguez',
        role: 'Piano Instructor, Madrid Conservatory',
        paragraph: `"SymphoClass transformed my teaching career. I now connect with students from around the world
                  without leaving my studio."`
    }, {
        name: 'James Chen',
        role: 'Violin Student',
        paragraph: `"As a student in a small town, I never thought I'd have access to world-class violin instruction.
                  SymphoClass made it possible."`
    }];

    testimonials.forEach(testimonial => {
        const testimonialCard = createNewContainer(`${mainClassName}-${currentPage}-testimonial`);
        testimonialsContent.appendChild(testimonialCard);

        const testimonialContent = createNewContainer(`${testimonialCard.className}-content`);
        testimonialCard.appendChild(testimonialContent);

        const testimonialParagraph = createNewParagraph(`${testimonialCard.className}-paragraph`, testimonial.paragraph);
        testimonialContent.appendChild(testimonialParagraph);

        const testimonialAuthor = createNewContainer(`${testimonialCard.className}-author`);
        testimonialContent.appendChild(testimonialAuthor);

        const testimonialName = createNewParagraph(`${testimonialCard.className}-name`, testimonial.name);
        testimonialAuthor.appendChild(testimonialName);

        const testimonialRole = createNewParagraph(`${testimonialCard.className}-role`, testimonial.role);
        testimonialAuthor.appendChild(testimonialRole);
    });

    return testimonialsSection;
};

export default createHeroTestimonialsSection;