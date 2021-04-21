import { freelancer } from './freelancer.js';
import { virk } from './viking.js';
import { lines, animateCode } from './lines.js';
import { parchment } from './parchment.js';
import { svgzoom } from './svgzoom.js';

function WorkItems(){
    let svgViking = virk;
    let svgCodeGuy = freelancer;
    let svgParchment = parchment;
    let svgLine = lines;
    let svgZoom = svgzoom;

    let viking = document.querySelector('.viking');
    let codeGuy = document.querySelector('.code-guy');
    let renderParchment = document.querySelector('.parchment');
    let ZoomInput = document.querySelector('.zoom-input');
    let lineCode = document.querySelector('.line-render');

    viking != undefined ? viking.innerHTML = svgViking : null ;
    codeGuy != undefined ? codeGuy.innerHTML = svgCodeGuy : null ;
    renderParchment != undefined ? renderParchment.innerHTML = svgParchment : null ;
    ZoomInput != undefined ? ZoomInput.innerHTML = svgZoom : null ;
    lineCode != undefined ? lineCode.innerHTML = svgLine : null ;

    animateCode();

}

export {
    WorkItems
};