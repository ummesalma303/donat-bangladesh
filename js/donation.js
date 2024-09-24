// document.getElementById('donate-btn-1')
// .addEventListener('click', function () {
//     const donateInput = getValidInput('donate-input');
//     // input checking
//     if (!donateInput || isNaN(donateInput) || donateInput < 0) {
//         // document.getElementById('modal-1').classList.add('hidden');
//         // document.getElementById('modal-2').classList.remove('hidden')
//         alert('invalid input');
//         return
//     }
//     const donateBalance = getTextFieldValue('donate-balance');
//     const totalDonate = donateInput + donateBalance;
//     document.getElementById('donate-balance').innerText = totalDonate;

//     // decrees balance
//     const balance = getTextFieldValue('balance');
//     const newBalance = balance - donateInput;
//     if (totalDonate > balance) {
//         document.getElementById('my_modal_5').classList.add('hidden')
//         alert('you have not enough money');
//         return
//     }
//     document.getElementById('balance').innerText = newBalance;
// })

document.getElementById('donate-btn-1')
    .addEventListener('click', function () {
        const donateInput = getValidInput('donate-input');
         if (!donateInput || isNaN(donateInput) || donateInput < 0) {
        alert('invalid input');
        return
    }
    const donateBalance = getTextFieldValue('donate-balance');
    const totalDonate = donateInput + donateBalance;
    document.getElementById('donate-balance').innerText = totalDonate;
    const balance = getTextFieldValue('balance');
    const newBalance = balance - donateInput;
    if (totalDonate > balance) {
    document.getElementById('my_modal_2').classList.add('hidden')
    alert('you have not enough money');
    return
    }
    document.getElementById('balance').innerText = newBalance;
        console.log(totalDonate);
    })


document.getElementById('donate-btn-2')
    .addEventListener('click', function () {
        const donateInput = getValidInput('donate-input-2');
         if (!donateInput || isNaN(donateInput) || donateInput < 0) {
        alert('invalid input');
        return
    }
    const donateBalance = getTextFieldValue('donate-balance-2');
    const totalDonate = donateInput + donateBalance;
    document.getElementById('donate-balance-2').innerText = totalDonate;
    const balance = getTextFieldValue('balance');
    const newBalance = balance - donateInput;
    if (totalDonate > balance) {
    document.getElementById('my_modal_2').classList.add('hidden')
    alert('you have not enough money');
    return
    }
    document.getElementById('balance').innerText = newBalance;
        // console.log();
})

document.getElementById('donate-btn-3')
    .addEventListener('click', function () {
    const donateInput = getValidInput('donate-input-3');
    if (!donateInput || isNaN(donateInput) || donateInput < 0) {
    alert('invalid input');
    return
    }
    const donateBalance = getTextFieldValue('donate-balance-3');
    const totalDonate = donateInput + donateBalance;
    document.getElementById('donate-balance-3').innerText = totalDonate;
    const balance = getTextFieldValue('balance');
    const newBalance = balance - donateInput;
    if (totalDonate > balance) {
    document.getElementById('my_modal_2').classList.add('hidden')
    alert('you have not enough money');
    return
    }
    document.getElementById('balance').innerText = newBalance;
})
