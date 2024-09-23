document.getElementById('history-btn')
    .addEventListener('click', function () {
        const donateInput = getValidInput('donate-input');
    if (!donateInput || isNaN(donateInput) || donateInput < 0) {
        return
    }
    const volunteerName = document.getElementById('volunteer-name').innerText;
    
        
    const history = document.createElement('div');
    history.classList.add('border-2', 'border-black', 'rounded-2xl', 'p-8')
    history.innerHTML = `
        <h2 class="text-xl font-bold text-[#111111] mb-2">${donateInput} Taka is Donated for famine-2024 at ${volunteerName}</h2>
        <p class="text-[#111111B3]"> ${new Date()}</p>
    `
    document.getElementById('history-section').appendChild(history)
    console.log('hj');
    
})