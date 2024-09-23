document.getElementById('donate-btn')
.addEventListener('click', function () {
    const donateInput = getValidInput('donate-input');
    const money = getTextFieldValue('money-btn');
    const total = donateInput + money;
    document.getElementById('money-btn').innerText = total;
})
