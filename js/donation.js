document.getElementById('donate-btn-1')
    .addEventListener('click', function () {
        const donateInput = getValidInput('donate-input');
        if (!donateInput || isNaN(donateInput) || donateInput < 0) {
        alert('Invalid Donation Input');
        return
        }
    const donateBalance = getTextFieldValue('donate-balance');
    const totalDonate = donateInput + donateBalance;
    // decrees balance
        const balance = getTextFieldValue('balance');
        if (balance < totalDonate) {
            alert("You don't have enough balance");
            return
        } else {
          my_modal_1.showModal()
    }
    const donateTotalBalance= document.getElementById('donate-balance').innerText = totalDonate;

    const newBalance = balance - donateInput;
     
       
    // document.getElementById('donate-btn-1').showModal
    document.getElementById('balance').innerText = newBalance;


        // card-1
    const volunteerName = document.getElementById('volunteer-name').innerText;  
    const history = document.createElement('div');
    history.classList.add('border-2', 'border-black', 'rounded-2xl', 'p-8')
        history.innerHTML = `
    <h2 class="text-xl font-bold text-[#111111] mb-2">${donateTotalBalance} Taka is Donated for famine-2024 at ${volunteerName}</h2>
    <p class="text-[#111111B3]"> ${new Date()}</p>
    `  
        document.getElementById('history-section').appendChild(history)        

    })
// card-2

document.getElementById('donate-btn-2')
    .addEventListener('click', function () {
        const donateInput = getValidInput('donate-input-2');
        if (!donateInput || isNaN(donateInput) || donateInput < 0) {
        alert('Invalid Donation Amount');
        return
        } 
    const donateBalance = getTextFieldValue('donate-balance-2');
    const totalDonate = donateInput + donateBalance;
    // decrees balance
        const balance = getTextFieldValue('balance');
        if (balance < totalDonate) {
            alert("You don't have enough balance");
            return
        } else {
          my_modal_2.showModal()
        }
    const donateTotalBalance = document.getElementById('donate-balance-2').innerText = totalDonate;
    const newBalance = balance - donateInput;
    document.getElementById('balance').innerText = newBalance;
        
        // card-2
    const volunteerName2 = document.getElementById('volunteer-name-2').innerText;  
    const history2= document.createElement('div');
    history2.classList.add('border-2', 'border-black', 'rounded-2xl', 'p-8')
        history2.innerHTML = `
    <h2 class="text-xl font-bold text-[#111111] mb-2">${donateTotalBalance} Taka is Donated for famine-2024 at ${volunteerName2}</h2>
    <p class="text-[#111111B3]"> ${new Date()}</p>
    `  
        document.getElementById('history-section').appendChild(history2)   
    })

// card-3
document.getElementById('donate-btn-3')
    .addEventListener('click', function () {
    const donateInput = getValidInput('donate-input-3');
    if (!donateInput || isNaN(donateInput) || donateInput < 0) {
        alert('Invalid Donation Amount');
        return
        } 
    const donateBalance = getTextFieldValue('donate-balance-3');
    const totalDonate = donateInput + donateBalance;
   
    const balance = getTextFieldValue('balance');
    if (balance < totalDonate) {
        alert("You don't have enough balance");
        return
    } else {
        my_modal_3.showModal()
    }
    const donateTotalBalance=document.getElementById('donate-balance-3').innerText = totalDonate;

    const newBalance = balance - donateInput;
    document.getElementById('balance').innerText = newBalance;

    // card-3
   const volunteerName3 = document.getElementById('volunteer-name-3').innerText;  
    const history3= document.createElement('div');
    history3.classList.add('border-2', 'border-black', 'rounded-2xl', 'p-8')
    history3.innerHTML = `
    <h2 class="text-xl font-bold text-[#111111] mb-2">${donateTotalBalance} Taka is Donated for famine-2024 at ${volunteerName3}</h2>
    <p class="text-[#111111B3]"> ${new Date()}</p>
    ` 
    document.getElementById('history-section').appendChild(history3)
        
})

document.getElementById('blog').addEventListener('click',function () {
    window.location.href = '/blog.html'
})