document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    console.log('get jokes');
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();
    xhr.open ('GET', `http://api.icndb.com/jokes/random${number}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response);
        
        let output = '';
        if(response.type === 'success'){
            this.response.value.forEach
        } else {
            output +=`<li>Something went wrong</li>`;
        }
    }
    }
    xhr.send();

    e.preventDefault();
}



