const refs = {
    inputSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.inputSizeControl.addEventListener('change', onInputChangeText);



function onInputChangeText(event) {
    
    refs.text.style.fontSize = event.currentTarget.value * 0.32 + "px";
    console.log(refs.text.style.fontSize)
}



