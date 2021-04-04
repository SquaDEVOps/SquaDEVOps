function renderModal(){
    document.addEventListener('DOMContentLoaded', e => {
        let modalController = document.createElement('div');
        let modalContent = document.createElement('div');
        let form = document.createElement('form');
        let submit = new renderInput('button', { className:'btn btn-submit', data:'buttonSubmit', value:'buttonSubmit', id:'buttonSubmit', innerText: 'Enviar'});
        let fieldName = new renderInput('input', { className: 'fieldName', data:'fieldName', value:'fieldName', id: 'fieldName' });
        let fieldMail = new renderInput('input', { className: 'fieldMail', data:'fieldMail', value:'fieldMail', id: 'fieldMail' });

        assignThis(modalController, { className: 'modal-controller', id:'modal-controller' });
        assignThis(modalContent, { className: 'modal-content', id: 'modal-content' });
        assignThis(form, { className: 'form-content', id:'form-content' });

        function assignThis(element, props = {}){
            Object.assign(element, props);
        }

        function renderInput(type, props = {}){

            this.input = document.createElement(type);

			Object.assign(this.input, props);

            this.input.setAttribute('data-'+ props.data, props.data);
            this.input.setAttribute('value', props.value);
		
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
        modalContent.appendChild(form);

        renderizeObject(form, [fieldName, fieldMail, submit]);
    
    
        document.body.appendChild(modalController);
    });
}


export {
    renderModal
}


