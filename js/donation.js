document.getElementById('donate-btn')
.addEventListener('click', function () {
    const donateInput = getValidInput('donate-input');
    if (!donateInput || isNaN(donateInput) || donateInput < 0) {
        document.getElementById('my_modal_5').classList.add('hidden')
        alert('invalid input');
        return
    }
    const donateBalance = getTextFieldValue('donate-balance');
    const totalDonate = donateInput + donateBalance;
    document.getElementById('donate-balance').innerText = totalDonate;

    // decrees balance
    const balance = getTextFieldValue('balance');
    const newBalance = balance - donateInput;
    if (totalDonate > balance) {
        document.getElementById('my_modal_5').classList.add('hidden')
        alert('you have not enough money');
        return
    }
    document.getElementById('balance').innerText = newBalance;
})
