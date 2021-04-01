import { GenerateSlide } from './modules/slider/slider.js';
import { render_def } from './modules/render_defs/render-defs.js';
import { WorkItems } from './modules/render/render.js';

const renderDef = render_def();
const workItems = WorkItems();

/* CALL SLIDES */
GenerateSlide('mySlides', 'dot', '.prev-arrow', '.next-arrow');
GenerateSlide('projectSlides', 'pj-dot', '.pj-prev-arrow', '.pj-next-arrow');
