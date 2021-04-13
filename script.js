import { translate } from './modules/translate/translate.js';
import { GenerateSlide } from './modules/slider/slider.js';
import { render_def } from './modules/render_defs/render-defs.js';
import { WorkItems } from './modules/render/render.js';
import { renderAllRankings } from './modules/rankings/rankings.js';
import { renderModal, activateModal } from './modules/modal/modal.js';
import { listMenu } from './modules/menu-mobile/menu-mobile.js';
import { routs } from './modules/routs/routs.js';
import { makeAnchor } from './modules/anchor/anchor.js';
import { scrollIt } from './modules/scroll/scroll.js';
import { collapse } from './modules/collapse/collapse.js';


translate.getNewRequest();
render_def();
WorkItems();
renderModal();
listMenu();
routs();
scrollIt();
makeAnchor();
collapse();
renderAllRankings();

/* CALL SLIDES */
GenerateSlide('mySlides', 'dot', '.prev-arrow', '.next-arrow');
GenerateSlide('projectSlides', 'pj-dot', '.pj-prev-arrow', '.pj-next-arrow');

