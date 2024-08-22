import disableLoader from '../Loader/disableLoader';

const activateLoader = () => {
    const body = document.querySelector('#app');
    const content = document.querySelector('.sc');
    const loader = document.querySelector('.sc-loader-container');
    const footer = document.querySelector('footer');

    body.style.margin = '0';
    content.style.display = 'none';
    footer.style.display = 'none';
    loader.style.display = 'flex';

    setTimeout(function () {
        disableLoader();
    }, 2000);
};

export default activateLoader;