import { GenerateSlide } from './modules/slider/slider.js';
import { render_def } from './modules/render_defs/render-defs.js';
import { WorkItems } from './modules/render/render.js';
import { renderAllRankings } from './modules/rankings/rankings.js';
import { renderModal, activateModal } from './modules/modal/modal.js';
import { listMenu } from './modules/menu-mobile/menu-mobile.js';

const renderDef = render_def();
const workItems = WorkItems();
const renderRankings = renderAllRankings();
const modal = renderModal();
const mobileMenu = listMenu();

/* CALL SLIDES */
GenerateSlide('mySlides', 'dot', '.prev-arrow', '.next-arrow');
GenerateSlide('projectSlides', 'pj-dot', '.pj-prev-arrow', '.pj-next-arrow');

