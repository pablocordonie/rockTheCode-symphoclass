import './form.css';

const createNewForm = (className, text) => `
    <form method="post" class="${className}">
        ${text}
    </form>
`;

export default createNewForm;