const adjustMainContentHeight = (currentPage, mainClassName, scClassName) => {
    let main = '';
    currentPage === 'events' ? main = document.querySelector(`.${mainClassName}-events`) : main = document.querySelector(`.${mainClassName}`);

    const sc = document.querySelector(`.${scClassName}`);

    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    const paddingAmount = windowHeight * 0.01;

    if (currentPage === 'login' && windowWidth > 900) {
        sc.style.paddingTop = `${paddingAmount + 0.005}rem`;
        main.style.paddingBottom = `${paddingAmount}rem`;
    } else if (currentPage === 'login') {
        const paddingTop = windowHeight * 0.0125;
        sc.style.paddingTop = `${paddingTop}rem`;
        main.style.paddingBottom = `${paddingAmount}rem`;
    } else {
        const paddingTop = windowHeight * 0.0075;
        sc.style.paddingTop = `${paddingTop}rem`;
        main.style.paddingBottom = `${paddingAmount}rem`;
    }
};

export default adjustMainContentHeight;