const createNewInput = (className, inputType, placeholderText) => `
    <input class="${className} type="${inputType}" placeholder="${placeholderText}">
`;

export default createNewInput;