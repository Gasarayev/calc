const form = document.querySelector('#form');
const billInput = document.querySelector('#bill');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const selectedRadio = form.querySelector('[name="percent"]:checked')
    if (!selectedRadio) {
        alert('sech')
        return
    }

    const percentValue = Number(selectedRadio.value);
    const billValue = Number(billInput.value);
    const result = billValue * (percentValue / 100);

    resultDiv.insertAdjacentHTML('afterbegin', `<h1>${result}</h1>`);
});