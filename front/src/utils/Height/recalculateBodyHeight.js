const recalculateBodyHeight = (newHeight) => document.body.style.setProperty('--pseudo-height', `${newHeight}svh`);

export default recalculateBodyHeight;