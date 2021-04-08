function listMenu() {
    let activateMenu = document.querySelectorAll('.activate-menu');
    let closeMenu = document.querySelectorAll('.close-menu');
    activateMenu.forEach(clicker => {
        clicker.addEventListener('click', e => {
            openNav();
        });
    });

    closeMenu.forEach(clicker => {
        clicker.addEventListener('click', e => {
            closeNav();
        });
    });
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

export {
    listMenu,
    openNav,
    closeNav
}