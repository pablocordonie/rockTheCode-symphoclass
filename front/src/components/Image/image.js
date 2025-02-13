import './image.css';
import createNewTagTemplate from '../Tag/tag';

const createNewImage = (className, srcText, altText) => {
    const newImg = createNewTagTemplate('img', className, { alt: `${altText}`, src: `${srcText}` });
    return newImg;
};

export default createNewImage;