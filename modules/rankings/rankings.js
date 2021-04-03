function renderAllRankings(){
    let rankings = '';
    let w = document.querySelector('.left-block').offsetWidth;
    let h = document.querySelector('.left-block').offsetHeight;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    for(let i = 0; i <= 21; i++){
        if(i == 0){
            rankings = `<svg class="icon icon-chevron" data-chevron="0" style="position:relative;width:${getRandomInt(20, 53)}px;height:${getRandomInt(20, 53)}px;top:${getRandomInt(-h/2.5, h)}px;
            left:${getRandomInt(-w, w)}px;transform:rotate(${getRandomInt(0, 180)}deg);"><use xlink:href="#icon-chevron"></use></svg>`;
        } else {
            rankings += `<svg class="icon icon-chevron-${i}" data-chevron="${i}" style="position:relative;width:${getRandomInt(20, 53)}px;height:${getRandomInt(20, 53)}px;top:${getRandomInt(-h/2.5, h)}px;
            left:${getRandomInt(-w, w)}px;transform:rotate(${getRandomInt(0, 180)}deg);"><use xlink:href="#icon-chevron-${i}"></use></svg>`;
        }
    }

    let rank = document.querySelector('.ranking');

    rank != undefined ? rank.innerHTML = rankings : null ;

    let rankSvg = document.querySelectorAll('.ranking svg');

    rankSvg.forEach(rankD => {

        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        rankD.onmousedown = function(e){

            rankD.classList.add('dragged');
            pos3 = e.clientX;
            pos4 = e.clientY;

            rankD.onmousemove = function(e){
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
    
                let rankDT = rankD.style.top;
                rankDT = rankDT.replace('px', '');
                rankDT = Number(rankDT);
                let rankDL = rankD.style.left;
                rankDL = rankDL.replace('px', '');
                rankDL = Number(rankDL);
    
                rankD.style.position = "relative";
                rankD.style.top = ( rankDT - pos2) + "px";
                rankD.style.left = ( rankDL - pos1) + "px";
            }

            rankD.onmouseup = function(e){
                rankD.classList.remove('dragged');
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
    
                let rankDT = rankD.style.top;
                rankDT = rankDT.replace('px', '');
                rankDT = Number(rankDT);
                let rankDL = rankD.style.left;
                rankDL = rankDL.replace('px', '');
                rankDL = Number(rankDL);
    
                rankD.style.position = "relative";
                rankD.style.top = ( rankDT - pos2) + "px";
                rankD.style.left = ( rankDL - pos1) + "px";
                rankD.onmousemove = function(){};

            }
        }
    });
    


}

export {
    renderAllRankings
}