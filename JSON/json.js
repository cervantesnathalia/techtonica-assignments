// BRAD - COURSE MODERN JVS FROM THE BEGINNING
// Aula - 59 - working with ajax & Json
// with local file , a proxima aula usa API esse so usa um local file que criei


document.getElementById('button2').addEventListener('click', loadCustomers);
// preciso de ajudar nessa parte eu nao to entendendo bem


//load customers - that points an array with all the people
function loadCustomers() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true); // se precisar acessar informacoes de algum API ou GIthub por exemplo e mostrar na sua pagina , eh a msm coisa so mudar no segundo parametro, pq aqui estamos acessando por um local file. No proprio html

    xhr.onload = function (e) {
        if (this.status === 200) {
            // console.log(this.responseText);

    const customers = JSON.parse(this.responseText); //faz com q o output seja linkado na div que declarei no html. Precisa parse p um object primeiro pq ele nao reconhece "string". 
    let output = '';
    customers.forEach(function(customers){ 
        output += //we want append on to the empty output , each iteration will append the new output to the new customer
        `<ul>
        <li>ID: ${customers.id}</li> 
        <li>Name: ${customers.name}</li>
        <li>Company: ${customers.company}</li>
        <li>Phone: ${customers.phone}</li>
        </ul>
        `
    });
    
        document.getElementById("customers").innerHTML = output;
        // to print this in the brownser
        }
    }
    xhr.send();
}







document.getElementById('button1').addEventListener('click', loadCustomer);
// preciso de ajudar nessa parte eu nao to entendendo bem

//Load customer that point jus one object
function loadCustomer() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true); // se precisar acessar informacoes de algum API ou GIthub por exemplo e mostrar na sua pagina , eh a msm coisa so mudar no segundo parametro, pq aqui estamos acessando por um local file. No proprio html

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);

    const customer = JSON.parse(this.responseText); //faz com q o output seja linkado na div que declarei no html. Precisa parse p um object primeiro pq ele nao reconhece "string". 

    const output =`
        <ul>
        <li> ID: ${customer.id}</li> 
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.name}</li>
        <li>Phone: ${customer.name}</li>
        </ul>
        `
        document.getElementById("customer").innerHTML = output;
        // to print this in the brownser
        }
    }
    xhr.send();
}


// para montar um object  ma