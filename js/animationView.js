// Seleccionamos todos los elementos que queremos animar
const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in-left, .zoom-in, .rotate-in');

// Función que se ejecuta cuando el usuario hace scroll
function checkVisibility() {
    elementsToAnimate.forEach(element => {
        const rect = element.getBoundingClientRect();

        // Comprobamos si el elemento está visible en el viewport
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            // Si el elemento está en el viewport, le añadimos la clase 'visible' (para que se active la animación)
            element.classList.add('visible');
        } else {
            // Si el elemento no está visible, quitamos la clase 'visible' para que la animación se repita cuando entre nuevamente en el viewport
            element.classList.remove('visible');
        }
    });
}

// Ejecutar la función cuando se haga scroll
window.addEventListener('scroll', checkVisibility);

// Ejecutar la función al cargar la página para animar los elementos que ya están en el viewport
document.addEventListener('DOMContentLoaded', checkVisibility);

