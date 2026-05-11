console.log('stand proud, you can code!');

function changeImage(clickedImg) {
    const mainImg = document.querySelector('.main-image');
    const tempSrc = mainImg.src;
    mainImg.src = clickedImg.src;
    clickedImg.src = tempSrc;
}

