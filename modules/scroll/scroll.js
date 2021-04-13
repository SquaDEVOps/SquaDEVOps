import { xScene } from '../scene/scene.js';

function scrollIt(){
    let menu = document.querySelector('.menu-primary');

    window.onscroll = debounce(function() {
        (window.scrollY > menu.getBoundingClientRect().height * 2) ? menu.classList.add('fixed') : menu.classList.remove('fixed');
        (window.scrollY > 2600) ?  xScene.init() : xScene.stop();
    }, 125);

    document.addEventListener('DOMContentLoaded', e => {
        (window.scrollY > menu.getBoundingClientRect().height * 2) ? menu.classList.add('fixed') : menu.classList.remove('fixed');
        (window.scrollY > 2600) ?  xScene.init() : xScene.stop();
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