import { GenerateSlide } from './modules/slider/slider.js';
import { render_def } from './modules/render_defs/render-defs.js';
import { WorkItems } from './modules/render/render.js';
import { renderAllRankings } from './modules/rankings/rankings.js';
import { renderModal, activateModal } from './modules/modal/modal.js';
import { listMenu } from './modules/menu-mobile/menu-mobile.js';
import { routs } from './modules/routs/routs.js';
import { translate } from './modules/translate/translate.js';
import { makeAnchor } from './modules/anchor/anchor.js';
import { scrollIt } from './modules/scroll/scroll.js';
import { collapse } from './modules/collapse/collapse.js';

const renderDef = render_def();
const workItems = WorkItems();
const renderRankings = renderAllRankings();
const modal = renderModal();
const mobileMenu = listMenu();
const rout = routs();
const activeTranslate = translate.getNewRequest();
const scroll = scrollIt();
const anchor = makeAnchor();
const collpse = collapse();

/* CALL SLIDES */
GenerateSlide('mySlides', 'dot', '.prev-arrow', '.next-arrow');
GenerateSlide('projectSlides', 'pj-dot', '.pj-prev-arrow', '.pj-next-arrow');

