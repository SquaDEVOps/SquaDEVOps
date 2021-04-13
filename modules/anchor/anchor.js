const requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;

function makeAnchor(){
    document.querySelectorAll('[data-go]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            let victim = document.querySelector('#'+this.dataset.go);

            victim.scrollIntoView({block: "center", behavior: "smooth"});
            
        });
    });
}


export {
    makeAnchor
}