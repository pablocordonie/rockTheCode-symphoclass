import createTestimonialAuthor from '../../../../components/Item/Testimonials/Author/author';
import createTestimonialItem from '../../../../components/Item/Testimonials/Testimonial/testimonial';
import createTestimonialContent from '../../../../components/List/Testimonials/Testimonial/testimonial';
import createTestimonialName from '../../../../components/Paragraph/Testimonials/Author/Name/name';
import createTestimonialParagraph from '../../../../components/Paragraph/Testimonials/Testimonial/testimonial';
import createTestimonialRole from '../../../../components/Paragraph/Testimonials/Author/Role/role';
import createTestimonialsContent from '../../../../components/List/Testimonials/testimonials';
import createTestimonialsSection from '../../../../components/Section/Testimonials/testimonials';
import createTestimonialsTitle from '../../../../components/Title/H2/Testimonials/testimonials';
import { homeTestimonials } from '../../../../config/config';

const createHomeTestimonialsSection = (appConfig, currentPage) => {
    const { mainClassName } = appConfig;

    const testimonialsSection = createTestimonialsSection(`${mainClassName}-${currentPage}-testimonials`, 'testimonials');

    const testimonialsTitle = createTestimonialsTitle(`${testimonialsSection.className}-title`, 'What Our Users Say');
    testimonialsSection.appendChild(testimonialsTitle);

    const testimonialsContent = createTestimonialsContent(`${testimonialsSection.className}-content`);
    testimonialsSection.appendChild(testimonialsContent);

    homeTestimonials.forEach(testimonial => {
        const testimonialCard = createTestimonialItem(`${mainClassName}-${currentPage}-testimonial`);
        testimonialsContent.appendChild(testimonialCard);

        const testimonialContent = createTestimonialContent(`${testimonialCard.className}-content`);
        testimonialCard.appendChild(testimonialContent);

        const testimonialItem = createTestimonialItem(`${testimonialCard.className}-item`);
        testimonialContent.appendChild(testimonialItem);

        const testimonialParagraph = createTestimonialParagraph(`${testimonialCard.className}-paragraph`, testimonial.paragraph);
        testimonialItem.appendChild(testimonialParagraph);

        const testimonialAuthor = createTestimonialAuthor(`${testimonialCard.className}-author`);
        testimonialContent.appendChild(testimonialAuthor);

        const testimonialName = createTestimonialName(`${testimonialCard.className}-name`, testimonial.name);
        testimonialAuthor.appendChild(testimonialName);

        const testimonialRole = createTestimonialRole(`${testimonialCard.className}-role`, testimonial.role);
        testimonialAuthor.appendChild(testimonialRole);
    });

    return testimonialsSection;
};

export default createHomeTestimonialsSection;