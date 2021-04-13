function scrollIt(){
    let menu = document.querySelector('.menu-primary');

    document.onscroll = e => {
        (window.scrollY > menu.getBoundingClientRect().height * 2) ? menu.classList.add('fixed') : menu.classList.remove('fixed');
        if(window.scrollY >= document.querySelector('.segundo-bloco').getBoundingClientRect().height){
        }
    }

    document.addEventListener('DOMContentLoaded', e => {
        (window.scrollY > menu.getBoundingClientRect().height * 2) ? menu.classList.add('fixed') : menu.classList.remove('fixed');
    })
}

export {
    scrollIt
}