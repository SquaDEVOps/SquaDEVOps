import { translate } from '../translate/translate.js'

function generatedModal(){
    document.addEventListener('ModalLoaded', e => { 

        let form = document.querySelector('.form-content');
        let fieldmail = document.querySelector('.fieldMail');
        let fieldname = document.querySelector('.fieldName');
        let discord = document.querySelector('.fieldDiscord');
        let spin = document.createElement('div');
        var subject = "Participante Squad";
        let data = {};
        let myHeaders = new Headers();
    
        Object.assign(spin, { className: 'spin hidden', innerHTML: '<svg class="icon icon-hourglass"><use xlink:href="#icon-hourglass"></use></svg>'});
        form.append(spin);
    
        var hideSpin = (function(){
            function init(){
                spin.classList.add('hidden');
            }
            return {
                init: init
            }
        })();
    
        let showSpin = (function(){
            function init(){
                spin.classList.remove('hidden');
            }
            return {
                init: init
            }
        })();
    
    
        var autoClose = (function(){
            function init(){
                let modalC = document.querySelector('#modal-controller');
                document.body.classList.remove('form-visible');
                modalC.classList.add('inactive');
                modalC.classList.remove('active');
            }
            return {
                init:init
            }
        })();
    
        let resultForm = function(classResp, messageResp){
            let responseBlock = document.createElement('div');
            Object.assign(responseBlock, {className: classResp, innerHTML: `<p class="${classResp}-paragraph" data-lang="${messageResp}"></p>`});
    
                setTimeout(() => {
                    responseBlock.classList.add('hidden');
                    setTimeout(() => {
                        responseBlock.remove();
                        if(classResp == 'messageSuccess'){
                            autoClose.init();
                            location.reload();
                        }
                    }, 600);
                }, 6500);
    
            form.append(responseBlock);

            translate.getNewRequest();
        }
     
    
        
        form.addEventListener('submit', e => {
            e.preventDefault();
    
            showSpin.init();
    
    
            if(fieldname != undefined && fieldmail != undefined && discord != undefined){
                
                let fieldnameV = fieldname.value;
                let fieldmailV = fieldmail.value;
                let discordV = discord.value;
    
                if(fieldnameV != undefined && fieldmailV != undefined && discordV != undefined){
    
                        if(fieldnameV != '' && fieldmailV != ''){
    
                            if(discordV == ''){
                                discordV = 'N/A';
                            }
        
                            data = {
                                subject: subject + ': ' + fieldnameV,
                                fieldmail: fieldmailV,
                                fieldname: fieldnameV,
                                discord: discordV
                            }
                
                            myHeaders.append("Origin", location.href);
                            myHeaders.append("Content-Type", "application/json");
        
                            var myInit = { method: 'POST',
                                headers: myHeaders,
                                mode: 'cors',
                                cache: 'default',
                                body: JSON.stringify(data)
                            };
        
                        
                            var myRequest = new Request('https://squadops.herokuapp.com/email', myInit);
                
                            fetch(myRequest)
                            .then(function(response) {
                                console.log(response);
            
                                resultForm('messageSuccess', 'message-success');
            
                                setTimeout(() => {
                                    hideSpin.init()
                                }, 1500);
                            })
                            .catch(function(error) {
                                console.log(error);
            
                                resultForm('messageError', 'message-error');
            
                                setTimeout(() => {
                                    hideSpin.init()
                                }, 1500);
                            });
                        } else {
        
                            resultForm('messageError', 'message-fields');
        
                            setTimeout(() => {
                                hideSpin.init()
                            }, 1500);
                        }
    
                } else {
                    setTimeout(() => {
                        hideSpin.init()
                    }, 1500);
                }
            }
               
        });
    });
}

export {
    generatedModal
}