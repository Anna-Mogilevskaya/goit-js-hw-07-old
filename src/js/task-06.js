const validInput = document.querySelector('#validation-input')

validInput.addEventListener('blur', onInputChange);



function onInputChange(event) {
    const inputLength = Number(event.target.dataset.length);
    const inputValue = event.currentTarget.value.length;

    
    console.log(inputLength)
    console.log(inputValue)

    if (inputLength === inputValue) {
        validInput.classList.remove('invalid');
        validInput.classList.add('valid');
    } else {
        validInput.classList.remove('valid');
        validInput.classList.add('invalid');
    }

}