import { portifolio } from './rout/portifolio.js';

function routs(){
    function checkAllNavs(navs){
        let navData = document.querySelectorAll(navs);
        let arrayNav = [];
      navData.forEach(function(listData, i) {
        arrayNav.push(listData.dataset.rout);
        // console.log(arrayNav);
      });
     
      return arrayNav;
      
    }

    /* RENDER FUNCTION */
    function render(){
      let main = document.querySelectorAll('.rout');
      main.forEach(function(tgt, i) {
        tgt.addEventListener('click', e => {
          callRout(e.target.dataset.rout, '.blockrender');
        });
      });
    
    }

    function callRout(routing, victim){
        let renderize = document.querySelector(victim);
        //renderize.innerHTML = routing;
        let road = checkAllNavs('.rout');
        
        road.forEach(function(roadList, i) {


          if(routing == 'portifolio'){
              let myrender = portifolio();
              renderize.classList.remove('hidden');
              renderize.innerHTML = myrender;
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

    function ifd (divClass){
        if(divClass != undefined){
            return true;
        }
        return false;
    }

    render();
}

export {
    routs
}