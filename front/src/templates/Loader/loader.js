import './loader.css'

const createNewLoader = (className) => `
    <div class="${className}">
        <div class="sc-loader"></div>
        <div class="sc-loader-text">Cargando...</div>
    </div>
`;

export default createNewLoader;