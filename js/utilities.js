function getValidInput(id) {
    const inputValue = document.getElementById(id).value;
    // console.log(id);
    
    const inputNumber = parseFloat(inputValue);
    // console.log(inputNumber);
    return inputNumber;
}
function getTextFieldValue(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSection(id) {
     const donateInput = getValidInput('donate-input');
    if (!donateInput || isNaN(donateInput) || donateInput < 0) {
        alert('invalid input');
     document.getElementById('history-btn').classList.remove('bg-primary')
        return
    }
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
    
}