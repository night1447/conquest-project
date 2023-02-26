var swiper = new Swiper('.quality__swiper', {
    pagination: {
        el: '.swiper-counter',
        type: 'fraction',
        clickable: true,
        renderFraction: function (currentClass, totalClass) {
            return `<span class=${currentClass}></span>`
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
const swiperCounter = document.querySelector('.swiper-pagination-current');

swiperCounter.innerHTML = `0${swiper.activeIndex + 1}`;
swiper.on('paginationRender', () => {
    if (+swiper.activeIndex < 9) {
        swiperCounter.innerHTML = `0${swiper.activeIndex + 1}`;
    } else {
        swiperCounter.innerHTML = `${swiper.activeIndex + 1}`;
    }
})


const mobileMenuButton = document.querySelector(".navigation__mobile-menu");
const navigationList = document.querySelector(".navigation__list");
const toggleOverflowBody = () => document.body.classList.toggle("_overflow-hidden");
mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('_active');
    navigationList.classList.toggle("_active");
    toggleOverflowBody();
})