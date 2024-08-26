import './loader.css'

const createNewLoader = (loaderClassName) => `
    <div class="${loaderClassName}">
        <div class="sc-loader"></div>
        <div class="sc-loader-text">Cargando...</div>
    </div>
`;

export default createNewLoader;