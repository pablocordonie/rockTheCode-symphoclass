import './loginField.css'

const loginField = (fieldName, labelText, inputType = 'text') => `
    <div class="sc-main-login_form-${fieldName}_field">
        <label class="sc-main-login_form-${fieldName}_field-label">${labelText}</label>
        <input class="sc-main-login_form-${fieldName}_field-input" type=${inputType} />
    </div>
`;

export default loginField;