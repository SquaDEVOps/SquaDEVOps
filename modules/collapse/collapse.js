function collapse (){

    const accordion = document.querySelector('.accordion');

    let tempHTML = '';

    for(let i = 1; i <= 6; i++){

        tempHTML = `
            <div class="accordion-item">
                <button id="accordion-button-1" aria-expanded="false">
                    <span class="accordion-title" data-lang="sec-faq-question0${i}"></span>
                    <span class="iconf" aria-hidden="true">
                        <svg class="icon icon-potion"><use xlink:href="#icon-potion"></use></svg>
                    </span>
                </button>
                <div class="accordion-content">
                <p data-lang="sec-faq-answer0${i}"></p>
                </div>
            </div>
        `;
    
        accordion.innerHTML += tempHTML;
    }

    

    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');
    
        for (let i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }
    
        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));
}

export {
    collapse
}