let imgContainer = document.querySelector('.img-container');
let backBtn = document.querySelector('#back');
let nextBtn = document.querySelector('#next');

backBtn.addEventListener('click', () => {
    imgContainer.style.scrollBehavior = "smooth"
    if(imgContainer.scrollLeft == 0) {
        imgContainer.scrollLeft += 880
    }
    else {
        imgContainer.scrollLeft -= 220;
    }
})
nextBtn.addEventListener('click', () => {
    imgContainer.style.scrollBehavior = "smooth"
    if(imgContainer.scrollLeft == 880) {
        imgContainer.scrollLeft -= 880
    }
    else {
        imgContainer.scrollLeft += 220;
    }
})

