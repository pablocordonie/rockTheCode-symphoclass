import './image.css';

const createNewImage = (className, src, altText) => {
    const newImg = document.createElement('img');
    newImg.className = `${className}`;
    newImg.src = `${src}`;
    newImg.alt = `${altText}`;

    return newImg;
};

export default createNewImage;