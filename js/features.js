document.getElementById('donation-btn')
    .addEventListener('click', function () {
    document.getElementById('donation-btn').classList.remove('bg-primary')
    showSection('donate-section')
    })

document.getElementById('history-btn')
    .addEventListener('click', function () {
    // document.getElementById('history-btn').classList.remove('bg-primary')
    document.getElementById('history-btn').classList.add('bg-primary')
        showSection('history-section');
})