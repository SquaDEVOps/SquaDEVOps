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

    let resultForm = function(classResp, messageResp){
        let responseBlock = document.createElement('div');
        Object.assign(responseBlock, {className: classResp, innerHTML: `<p class="${classResp}"> ${messageResp} </p>`});

            setTimeout(() => {
                responseBlock.classList.add('hidden');
            }, 2500);

        form.append(responseBlock);
    }
 

    
    form.addEventListener('submit', e => {
        e.preventDefault();

        showSpin.init();


           
            fieldnameV = fieldname.value;
            fieldmailV = fieldmail.value;
            discordV = discord.value;

            if(fieldnameV != undefined && fieldmailV != undefined && discordV != undefined){
                
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
            
            
                var myRequest = new Request('http://localhost:3000/email', myInit);
    
                fetch(myRequest)
                .then(function(response) {
                    console.log(response);

                    resultForm('messageSuccess', 'Você está prestes a entrar em um novo mundo, aguarde e entraremos em contato');

                    setTimeout(() => {
                        hideSpin.init()
                    }, 1500);
                })
                .catch(function(error) {
                    console.log(error);

                    resultForm('messageError', 'Ops, alguma informação está incorreta. Tente novamente');

                    setTimeout(() => {
                        hideSpin.init()
                    }, 1500);
                });
    
            } else {
            setTimeout(() => {
                hideSpin.init()
            }, 1500);
       }
    });
});