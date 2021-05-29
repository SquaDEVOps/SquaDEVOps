function read(url) {
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
            //basename = url.replace(/^.*\/|\.[^.]*$/g, '');
            basename = url.substring(url.lastIndexOf('/')+1);
            scssCode = xmlhttp.responseText;
            Sass.writeFile(basename, scssCode);

            //console.log(basename, scssCode.replace(' ', ''));

            compile('@import "' + basename + '"; ');
        }

    }
    xmlhttp.open("GET",url,true);
    xmlhttp.send();  
}    

function registerStylesheets() {

    var links = document.getElementsByTagName('link');
    sheets = [];

    for (var i = 0; i < links.length; i++) {
        if (links[i].rel === 'stylesheet/scss') {
            sheets.push(links[i].href);
        }
    }
    return sheets;
};

var sheets =  registerStylesheets();

for (var i = 0; i < sheets.length; i++) { 
    read(sheets[i]);
} 

let compiledStyle = document.createElement('style');

function compile(scss) {

    let checkSass = Sass.compile(scss);

    console.log(checkSass);

    compiledStyle.innerHTML += checkSass;
    document.head.appendChild(compiledStyle);

}

