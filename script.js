const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', function() {
    const margin = 160;
    const x = Math.random() * (window.innerWidth - 2 * margin);
    const y = Math.random() * (window.innerHeight - 2 * margin);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'yes-response.html';   
});