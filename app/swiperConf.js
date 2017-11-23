import Swiper from '../node_modules/swiper/dist/js/swiper.min.js';

export const wrapper = document.getElementsByClassName('swiper-wrapper')[0];
let slides;

export const mySwiper = new Swiper ('.swiper-container', {
    virtualTranslate: true,
    direction: 'vertical',
    height: window.innerHeight,
    allowTouchMove: false,
    mousewheel: true,
    keyboard: {
        enabled: true,
      }
});

const onLoad = () => {
    slides = document.getElementsByClassName('swiper-slide');
    [...slides].map((item) => item.style.height = window.innerHeight+'px');
    document.getElementById('small-slide').style.height = '325px';
    document.getElementById('footer').style.height = '100px'; 
};
onLoad();

window.addEventListener('resize', onLoad);

