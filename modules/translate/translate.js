import { choseAside } from '../choseaside/choseaside.js';

let translate = (() => {

    document.body.classList.add('spin');

    // choseAside();

    let lang = {};
    let ptLang = document.querySelector('.lang-pt');
    let enLang = document.querySelector('.lang-en');

    let spin = document.createElement('div');

    Object.assign(spin, {className: '', innerHTML: ''})

    var requestURL = './modules/translate/pt/pt.json';

    enLang.addEventListener('click', e => {
        requestURL = './modules/translate/en/en.json';
        getNewRequest();
        enLang.classList.add('fakeHover');
        if(ptLang.classList.contains('fakeHover')){
            ptLang.classList.remove('fakeHover');
        }
    });

    ptLang.addEventListener('click', e => {
        requestURL = './modules/translate/pt/pt.json';
        getNewRequest();
        ptLang.classList.add('fakeHover');

        if(enLang.classList.contains('fakeHover')){
            enLang.classList.remove('fakeHover');
        }
       
    });

    function getNewRequest(){
    
        var request = new XMLHttpRequest();

        request.open('GET', requestURL);
    
        request.responseType = 'json';
        request.send();
    
        request.onload = async function() {
            //console.log(request.response);
            lang = await request.response;
            document.body.classList.remove('spin'); 
            translateNow(lang);
            return lang;
        }

    }

   getNewRequest();

    
    function translateNow(lang){
        let searchLang = document.querySelectorAll('[data-lang]');
        searchLang.forEach(singleLang => {
            if(singleLang.dataset.lang != undefined && lang[singleLang.dataset.lang] != undefined || singleLang.dataset.lang != '' && lang[singleLang.dataset.lang] != ''){
                singleLang.innerText = lang[singleLang.dataset.lang];
            }

            if(singleLang.dataset.lang == 'modal-name' || singleLang.dataset.lang == 'modal-email' || singleLang.dataset.lang == 'modal-discord'){
                singleLang.placeholder = lang[singleLang.dataset.lang];
            }
        });

    }

    return{
        getNewRequest,
        translateNow
    }


})();

export {
    translate,
}