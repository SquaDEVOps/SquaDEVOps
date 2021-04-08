document.addEventListener('ModalLoaded', e => { 
    let form = document.querySelector('.form-content');
    let fieldmail = document.querySelector('.fieldMail');
    let fieldname = document.querySelector('.fieldName');
    let discord = document.querySelector('.fieldDiscord');
    let subject = "Participante Squad";
    let data = {};
    
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
    
        axios.post('https://squadops.herokuapp.com/email', data, { headers: {
            'Content-Type': 'application/json'
        }})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    
    });
});