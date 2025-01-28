import './form.css';

const createNewForm = (className, content) => {
    const newForm = document.createElement('form');
    newForm.setAttribute('method', 'post');
    newForm.className = `${className}`;

    newForm.appendChild(content);
    return newForm;
};

export default createNewForm;