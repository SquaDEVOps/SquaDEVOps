import { xScene } from '../scene/scene.js';

function scrollIt(){
    let menu = document.querySelector('.menu-primary');

    window.onscroll = debounce(function() {
        (window.scrollY > menu.getBoundingClientRect().height * 2) ? menu.classList.add('fixed') : menu.classList.remove('fixed');

        if(window.innerWidth < 768){
            (window.scrollY > 5434) ?  xScene.init() : xScene.stop();
            (window.scrollY > menu.getBoundingClientRect().height * 2) ? document.body.style.marginTop = "77px" : document.body.style.marginTop = "0px" ;
        } else {
            (window.scrollY > 2600) ?  xScene.init() : xScene.stop();
            (window.scrollY > menu.getBoundingClientRect().height * 2) ? document.body.style.marginTop = "85px" : document.body.style.marginTop = "0px" ;
        }
      
    }, 125);

    document.addEventListener('DOMContentLoaded', e => {
        (window.scrollY > menu.getBoundingClientRect().height * 2) ? menu.classList.add('fixed') : menu.classList.remove('fixed');
        if(window.innerWidth < 768){
            (window.scrollY > 5434) ?  xScene.init() : xScene.stop();
            (window.scrollY > menu.getBoundingClientRect().height * 2) ? document.body.style.marginTop = "77px" : document.body.style.marginTop = "0px" ;
        } else {
            (window.scrollY > 2600) ?  xScene.init() : xScene.stop();
            (window.scrollY > menu.getBoundingClientRect().height * 2) ? document.body.style.marginTop = "85px" : document.body.style.marginTop = "0px" ;
        }
    });
    
}

function debounce (callback, time) {
    let interval;
    return (...args) => {
      clearTimeout(interval);
      interval = setTimeout(() => {
        interval = null;
        callback(...args);
      }, time);
    };
};

export {
    scrollIt
}