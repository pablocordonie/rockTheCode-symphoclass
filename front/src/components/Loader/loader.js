import './loader.css';

const createLoader = (className) => `
    <div class="${className}">
        <div class="tsc-spinner"></div>
    </div>
`;

export default createLoader;