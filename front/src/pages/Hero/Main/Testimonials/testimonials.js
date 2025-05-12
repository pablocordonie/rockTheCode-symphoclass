import createNewContainer from '../../../../components/Div/div';
import createNewH2Title from '../../../../components/Title/H2/h2';
import createNewParagraph from '../../../../components/Paragraph/paragraph';
import createNewSection from '../../../../components/Section/section';

const createHeroTestimonialsSection = (appConfig) => {
    const { mainClassName } = appConfig;

    const testimonialsSection = createNewSection(`${mainClassName}-testimonials`, 'testimonials');

    const testimonialsTitle = createNewH2Title(`${mainClassName}-section-title`, 'What Our Users Say');
    testimonialsSection.appendChild(testimonialsTitle);

    const testimonialsContainer = createNewContainer(`${testimonialsSection.className}-container`);
    testimonialsSection.appendChild(testimonialsContainer);

    const testimonials = [{
        name: 'María Rodríguez',
        role: 'Piano Instructor, Madrid Conservatory',
        description: `"SymphoClass transformed my teaching career. I now connect with students from around the world
                  without leaving my studio."`
    }, {
        name: 'James Chen',
        role: 'Violin Student',
        description: `"As a student in a small town, I never thought I'd have access to world-class violin instruction.
                  SymphoClass made it possible."`
    }];

    testimonials.forEach(testimonial => {
        const testimonialContainer = createNewContainer(`${mainClassName}-testimonial`);
        testimonialsContainer.appendChild(testimonialContainer);

        const testimonialContent = createNewContainer(`${testimonialContainer.className}-content`);
        testimonialContainer.appendChild(testimonialContent);

        const testimonialDescription = createNewParagraph(`${testimonialContainer.className}-p`, testimonial.description);
        testimonialContent.appendChild(testimonialDescription);

        const testimonialAuthor = createNewContainer(`${testimonialContainer.className}-author`);
        testimonialContent.appendChild(testimonialAuthor);

        const testimonialName = createNewParagraph(`${testimonialContainer.className}-name`, testimonial.name);
        testimonialAuthor.appendChild(testimonialName);

        const testimonialRole = createNewParagraph(`${testimonialContainer.className}-role`, testimonial.role);
        testimonialAuthor.appendChild(testimonialRole);
    });

    return testimonialsSection;
};

export default createHeroTestimonialsSection;