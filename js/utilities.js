function getValidInput(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    return inputNumber;
}
function getTextFieldValue(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSection(id) {
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
    
}