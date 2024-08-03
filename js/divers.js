//pour gerer le top-bar

window.addEventListener('scroll', function() {
    var topBar = document.querySelector('header .top-bar');
    if (window.scrollY > 0) {
        topBar.style.display = 'block';
    } else {
        topBar.style.display = 'none';
    }
});

