const adjustMainContentHeight = (currentPage, mainClassName, scClassName) => {
    let main = document.querySelector(`.${mainClassName}`);
    const sc = document.querySelector(`.${scClassName}`);

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const paddingAmount = windowHeight * 0.01;

    if (currentPage === 'login') {
        const paddingTop = windowWidth > 900 ? paddingAmount + 0.005 : windowHeight * 0.0125;
        sc.style.paddingTop = `${paddingTop}rem`;
        main.style.paddingBottom = `${paddingAmount}rem`;
    } else {
        if (currentPage === 'events') {
            main = document.querySelector(`.${mainClassName}-events`);
        }
        const paddingTop = windowHeight * 0.0075;
        sc.style.paddingTop = `${paddingTop}rem`;
        main.style.paddingBottom = `${paddingAmount}rem`;
    }
};

export default adjustMainContentHeight;