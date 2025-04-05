import './loader.css';

const createLoader = (className) => `
    <div class="${className}">
        <div class="sc-loader"></div>
    </div>
`;

export default createLoader;