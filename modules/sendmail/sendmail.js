document.addEventListener('ModalLoaded', e => { 
    let form = document.querySelector('.form-content');
    let fieldmail = document.querySelector('.fieldMail');
    let fieldname = document.querySelector('.fieldName');
    let discord = document.querySelector('.fieldDiscord');
    let subject = "Participante Squad";
    let data = {};
    let myHeaders = new Headers();
    
    form.addEventListener('submit', e => {
        e.preventDefault();

        fieldname = fieldname.value;
        fieldmail = fieldmail.value;
        discord = discord.value;
    
        data = {
            subject,
            fieldmail,
            fieldname,
            discord
        }

        myHeaders.append("Content-Type", "application/json");

        var myInit = { method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
    
    
        var myRequest = new Request('https://squadops.herokuapp.com/email', myInit);

        fetch(myRequest)
        .then(function(response) {
            console.log(response);
        })
        .then(function(error) {
            console.log(error);
        });
            

    
    });
});