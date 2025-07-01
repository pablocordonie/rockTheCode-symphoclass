import createNewTagTemplate from '../Tag/tag';

const createNewImage = (className, srcText, altText) => createNewTagTemplate('img', className, { alt: altText, src: srcText });

export default createNewImage;