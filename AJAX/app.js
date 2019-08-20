//AJAX TEMPLATE for HTML PAGE:
// <!DOCTYPE html>
// <html>
// <body>

// <div id="demo">
//   <h2>Let AJAX change this text</h2>
//   <button type="button" onclick="loadDoc()">Change Content</button>
// </div>

// </body>
// </html>

//AJAX TEMPLATE FOR JS PAGE:
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//        document.getElementById("demo").innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("GET", "ajax_info.txt", true);
//     xhttp.send();
//   }

document.getElementById("button").addEventListener('click', loadData);
function loadData(){
//create an xhr object
    const xhr = new XMLHttpRequest();

    //open
    xhr.open('GET', 'data.txt', true);
    console.log("READYSTATE" , xhr.readyState);
// console.log p voce ver no console element p saber em que stage voce esta
    

//e optional - usado para spinners/loaders
    xhr.onprogress = function(){ 
        console.log("REDYSTATE" , xhr.readyState);
    }

    xhr.onload= function(){
        console.log("READYSTATE" , xhr.readyState);
        if(this.status === 200){
            //console.log(this.responseText);
            document.getElementById('output').innerHTML= `<h1>${this.responseText}</h1>`
        // se quiser que o botao mostre uma resposta na propria pagina , faca esse link com
        // a pagina html e mostra qual eh a resposta que a o butao vai dar
        }

//
    }
// eh importante colocar essa parte tb para poder rodar
// caso aconteca algum erro e ai aparece essa parte.
xhr.onerror = function(){
    console.log('Request error...');
}


xhr.send();
}
//HTTP STATUS
//200 : "OK"
//403: "FORBIDDEN"
//404: "NOT FOUND"


//readyState Values - STEPS dependendo do que ta acontecendo
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready.