import createNewLoader from '../../templates/Loader/loader';

const printLoader = () => {
    const body = document.querySelector('#app');
    const content = document.querySelector('.sc');
    const footer = document.querySelector('footer');

    body.style.margin = '0';
    content.style.display = 'none';
    footer.style.display = 'none';

    body.innerHTML += createNewLoader();
    return body;
};

export default printLoader;