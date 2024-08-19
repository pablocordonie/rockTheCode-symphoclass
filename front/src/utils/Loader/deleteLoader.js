const deleteLoader = () => {
    const body = document.querySelector('#app');
    const content = document.querySelector('.sc');
    const loader = document.querySelector('.sc-loader-container');
    const footer = document.querySelector('footer');

    body.style.margin = '0 1rem';
    content.style.display = 'flex';
    footer.style.display = 'block';
    loader.style.display = 'none';

    return body;
};

export default deleteLoader;