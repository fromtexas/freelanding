import {mySwiper, wrapper} from 'swiperConf';

const moving = (() => {
    const list = document.getElementsByClassName('links')[0];
    const topButton = document.getElementsByClassName('top-button')[0];
    const menuBtn = document.getElementsByClassName('menu__bar');
    let currentSlide;
    let yTrans = 0;
    let shouldTrans = true;
    
    const moveSlide = (index, offset) => {
        mySwiper.slideTo(index);
        wrapper.style.transform = `translateY(-${offset}px)`;
    };
    
    const menuBtnColor = () => {
        if(currentSlide.classList.contains('portfolio') || currentSlide.classList.contains('small')){
            [...menuBtn].map((item) =>{
                item.style.backgroundColor = '#00A6E4';
            });
        }else{
           [...menuBtn].map((item) =>{
                item.style.backgroundColor = '#fff';
            }); 
        }
    };

    const move = (e) => {
        let slideIndex;
        let offset;
            if(e.target && e.target.nodeName === 'A'){
                offset = document.getElementsByClassName(e.target.dataset.lock)[0].offsetTop;
                for( let i = 0; i < mySwiper.slides.length ; i++){
                    if(mySwiper.slides[i].classList.contains(e.target.dataset.lock)){
                       slideIndex = i;
                        yTrans = offset;
                        shouldTrans = false;
                        console.log(mySwiper.slides[i].offsetHeight);
                        break;
                       }
                }
                moveSlide(slideIndex, offset);
            }
    };
    
    const moveSlideUp = () => {
        currentSlide = document.getElementsByClassName('swiper-slide-active')[0];
        if(shouldTrans){
            yTrans = yTrans + parseInt(currentSlide.style.height);
            wrapper.style.transform = `translateY(-${yTrans}px)`; 
        }
        menuBtnColor();
        shouldTrans = shouldTrans ? shouldTrans : !shouldTrans;
    };

    const moveSlideDown = () => {
        if(yTrans && shouldTrans){
            yTrans = yTrans - parseInt(currentSlide.style.height);
            currentSlide = document.getElementsByClassName('swiper-slide-active')[0];
            wrapper.style.transform = `translateY(-${yTrans}px)`;
        }
        menuBtnColor();
        shouldTrans = shouldTrans ? shouldTrans : !shouldTrans;
    };

    const fromBottom = () => {
        yTrans = 0;
        moveSlide(0, yTrans);
    };
    
    topButton.addEventListener('click', fromBottom);
    mySwiper.on('slideNextTransitionStart', moveSlideUp);
    mySwiper.on('slidePrevTransitionStart', moveSlideDown);
    list.addEventListener('click', move);  
})();

export default moving;
