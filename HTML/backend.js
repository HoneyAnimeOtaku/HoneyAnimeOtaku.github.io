document.addEventListener('DOMContentLoaded', function() {
    var listaItems = document.querySelectorAll('header nav ul li');

    listaItems.forEach(function(item) {
        var enlace = item.querySelector('a');
        enlace.addEventListener('click', function(event) {
            // Verifica si el enlace es interno (apunta a un fragmento en la misma página)
            if (enlace.getAttribute('href').charAt(0) === '#') {
                event.preventDefault();
                var destino = document.querySelector(enlace.getAttribute('href'));
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});