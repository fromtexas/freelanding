import {mySwiper, wrapper} from 'swiperConf';

const menu = (() => {
    const button = document.getElementsByClassName('menu')[0];
    const menuFrame = document.getElementsByClassName('map')[0];
    
    const toggleMenu = () => {
            menuFrame.classList.toggle('map_hidden');
            button.classList.toggle('cross');
    };
    
    button.addEventListener('click', toggleMenu);
})();

export default menu;