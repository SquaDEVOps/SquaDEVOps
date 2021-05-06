function choseAside(){
    let choseAside = document.querySelector('.chose-a-side');
    let choseAdiv = new renderThedata('div', { className:'choseAdiv', data:'choseAdiv', value:'choseAdiv', id:'choseAdiv'}); 
    let choseATitle = new renderThedata('h2', { className:'choseATitle', data:'choseATitle', value:'choseATitle', id:'choseATitle', dataLang: 'choseaside-title'}); 
    let choseASubTitle = new renderThedata('h5', { className:'choseASubTitle', data:'choseASubTitle', value:'choseASubTitle', id:'choseASubTitle', dataLang: 'choseaside-subtitle'});
    let choseDeveloper = new renderThedata('button', { className:'btn btn-submit developer', data:'choseDeveloper', value:'choseDeveloper', id:'choseDeveloper', dataLang: 'choseaside-developer'});
    let choseClient = new renderThedata('button', { className:'btn btn-submit client', data:'choseClient', value:'choseClient', id:'choseClient', dataLang: 'choseaside-client'});

    let choseChoices = new renderThedata('div', { className:'choseChoices', data:'choseChoices', value:'choseChoices', id:'choseChoices'}); 

    renderizeObject(choseChoices, [choseDeveloper, choseClient]);

    renderizeObject(choseAdiv, [choseATitle, choseASubTitle, choseChoices]);

    choseAside.append(choseAdiv);

    let DeveloperChose = document.querySelector('#choseDeveloper');
    let ClientChose = document.querySelector('#choseClient');

    choseAside.classList.add('active');
    document.body.classList.add('lock');

    DeveloperChose.addEventListener('click', e => {
        console.log('Developer');
        choseAside.classList.remove('active');
        document.body.classList.remove('lock');
    });

    ClientChose.addEventListener('click', e => {
        console.log('Client');
        choseAside.classList.remove('active');
        document.body.classList.remove('lock');
    });
}

function renderizeObject(prop, obj = []){
    obj.forEach(objRender => {
        if(prop != undefined && objRender != undefined){
            prop.append(objRender);
        }
    });
}


function renderThedata(type, props = {}){

    this.input = document.createElement(type);

    Object.assign(this.input, props);

    if(props.data != undefined){
        this.input.setAttribute('data-'+ props.data, props.data);
    }

    if(props.dataLang != undefined){
        this.input.setAttribute('data-lang', props.dataLang);
    }

    (props.value != undefined) ? this.input.setAttribute('value', props.value) : this.input.setAttribute('placeholder', props.placeholder);
    
    return this.input;

}

export{
    choseAside
}