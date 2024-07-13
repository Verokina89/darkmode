const darkmodeButton = document.getElementById('darkmodeButton');
const moonMode = document.getElementById('sun-mode');
//const headertopContainer = document.getElementById('headertopContainer');

darkmodeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        moonMode.src = './assets/img/luna.png';
    } else {
        moonMode.src = './assets/img/sol.png';
    }
});
