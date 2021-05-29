/* BLOCK SLIDE SCRIPT */
function GenerateSlide(mySlides, dot, prev, next){
    var slideIndex = 1;
    var next = document.querySelector(next);
    var prev = document.querySelector(prev);
    var slides = document.getElementsByClassName(mySlides);
    var dots = document.getElementsByClassName(dot);

    showSlides(slideIndex, mySlides, dot, prev, next);

    function plusSlides(n, mySlides, dot, prev, next) {
    showSlides(slideIndex += n, mySlides, dot, prev, next);
    }


    if(next != undefined){
    
        next.addEventListener('click', e => {
            plusSlides(1, mySlides, dot, prev, next);
        });
    
    }

    if(prev != undefined){
    
        prev.addEventListener('click', e => {
            plusSlides(-1, mySlides, dot, prev, next);
        });
    }

    // if(dots != undefined){
    //     let dotAll = document.querySelectorAll('.'+dot);
    //     dotAll.forEach( dotz => {
    //         dotz.addEventListener('click', e => {
    //             updateSlides(e.target.dataset.slide);
    //             return updateSlides();
    //         });
    //     });
    // }

    function showSlides(n, mySlides, dot, prev, next) {
    var i;
    if (n > slides.length) {slideIndex = 1}

    
        if(slideIndex == 1) {
            prev.classList.add('inactive');
        } else {
            if(prev.classList.contains('inactive') == true){
                prev.classList.remove('inactive'); 
            }
        }
    
        if(slideIndex == slides.length) {
                next.classList.add('inactive');
            } else {
                if(next.classList.contains('inactive') == true){
                next.classList.remove('inactive'); 
                }
        }

    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('rock');;
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // console.log(slideIndex, "slideIndex");
    // console.log(slides, "slides");
    // console.log(slides[slideIndex], 'slideIndexArray');

    slides[slideIndex-1].classList.add('roll');
    slides[slideIndex-1].classList.remove('rock');;
    dots[slideIndex-1].className += " active";
    }
}
/* END BLOCK SLIDE SCRIPT */


export {
    GenerateSlide
};




