function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldById(id) {
    const textValue = document.getElementById(id).innerText.replace(' BDT', '');
    const textNumber = parseFloat(textValue);
    return textNumber;
}



document.getElementById('donation-button').addEventListener('click',function(){
    showSectionById('donation-form');
});

document.getElementById('history-button').addEventListener('click',function(){
    showSectionById('transition-form');
});