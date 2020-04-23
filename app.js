document.querySelector('.get-quotes').addEventListener('click', getQuotes);

function getQuotes(e) {
    const number = document.querySelector('input').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://ron-swanson-quotes.herokuapp.com/v2/quotes/${number}`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            response.forEach(function (quote) {
                output += `<li>${quote}</li>`;
            });
            
            document.querySelector('.quotes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}