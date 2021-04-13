import { generatedModal } from '../sendmail/sendmail.js';

function renderModal(){
    document.addEventListener('DOMContentLoaded', e => {

        let modalController = document.createElement('div');
        let modalContent    = document.createElement('div');
        let form            = document.createElement('form');
        let title           = '';
        let MTitle          = new renderInput('h1', { className:'btn btn-submit', data:'buttonSubmit', value:'buttonSubmit', id:'buttonSubmit', innerText: title, dataLang: 'modal-title'}); 
        let submit          = new renderInput('button', { className:'btn btn-submit', data:'buttonSubmit', value:'buttonSubmit', id:'buttonSubmit', innerText: 'Enviar', dataLang: 'modal-cta'});
        let fieldName       = new renderInput('input', { className: 'fieldName', data:'fieldName', placeholder:'Seu nome*', id: 'fieldName', dataLang: 'modal-name', minLength:'5' });
        let fieldMail       = new renderInput('input', { className: 'fieldMail', data:'fieldMail', placeholder:'Seu e-mail*', id: 'fieldMail', dataLang: 'modal-email', pattern:'^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$' });
        let fieldDiscord    = new renderInput('input', { className: 'fieldDiscord', data:'fieldDiscord', placeholder:'Seu discord (opcional)', id: 'fieldDiscord', dataLang: 'modal-discord', minLength:'6' });

        assignThis(modalController, { className: 'modal-controller hidden', id:'modal-controller', innerHTML: '<svg class="icon icon-game-over inactivate-squadform"><use xlink:href="#icon-game-over"></use></svg> <span data-lang="modal-close"></span>'});
        assignThis(modalContent, { className: 'modal-content', id: 'modal-content' });
        assignThis(form, { className: 'form-content', id:'form-content' });

        function assignThis(element, props = {}){
            Object.assign(element, props);
        }

        function renderInput(type, props = {}){

            this.input = document.createElement(type);

			Object.assign(this.input, props);

            this.input.setAttribute('data-'+ props.data, props.data);

            if(props.dataLang != undefined){
                this.input.setAttribute('data-lang', props.dataLang);
            }

            (props.value != undefined) ? this.input.setAttribute('value', props.value) : this.input.setAttribute('placeholder', props.placeholder);
            
            return this.input;

        }

        function renderizeObject(prop, obj = []){
            obj.forEach(objRender => {
                if(prop != undefined && objRender != undefined){
                    prop.append(objRender);
                }
            });
        }

        modalController.appendChild(modalContent);
        modalContent.appendChild(MTitle);
        modalContent.appendChild(form);


        renderizeObject(form, [fieldName, fieldMail, fieldDiscord, submit]);
    
        document.body.appendChild(modalController);


        /* NEEDS TO BE SEARCH AFTER RENDER [modalOpener, modalCloser] */
        let modalOpener     = document.querySelectorAll('.activate-squadform');
        let modalCloser     = document.querySelectorAll('.inactivate-squadform');

        modalOpener.forEach(clicker => {
            clicker.addEventListener('click', e => {
                activateModal();

                var emmitModal = document.createEvent('Event');
                emmitModal.initEvent('ModalLoaded', true, true);
                document.dispatchEvent(emmitModal);

            });
        });

        modalCloser.forEach(clicker => {
            clicker.addEventListener('click', e => {
                inactivateModal();
            });
        });

        generatedModal();

    });
}

function activateModal(){
    let modalC = document.querySelector('#modal-controller');
    document.body.classList.add('form-visible');
    modalC.classList.add('active');
    modalC.classList.remove('inactive');
    return;
}

function inactivateModal(){
    let modalC = document.querySelector('#modal-controller');
    document.body.classList.remove('form-visible');
    modalC.classList.add('inactive');
    modalC.classList.remove('active');
    return;
}

export {
    renderModal,
    activateModal,
    inactivateModal
}


