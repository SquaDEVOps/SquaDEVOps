/* COLOR CHANGE */
function changemode (prop){
    let mode = document.querySelector(prop);
    mode.addEventListener('click', e => {
      if(ifd(mode)){
        mode.classList.toggle('dark');
        mode.classList.toggle('light');
        
        if(mode.classList.contains('light') == true){
           document.body.dataset.colorMode = 'light';
        } else {
          document.body.dataset.colorMode = 'dark';
        }
  
      }
    }); 
}