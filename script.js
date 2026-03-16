// Simple mobile menu toggle and year injection
(function(){
    var btn = document.getElementById('menuBtn');
    var links = document.getElementById('navLinks');
    if (btn && links) {
        btn.addEventListener('click', function () {
            var isOpen = links.classList.toggle('show');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
})();