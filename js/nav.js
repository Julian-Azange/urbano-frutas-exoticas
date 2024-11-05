// Selecciona todos los elementos del navbar
const navItems = document.querySelectorAll('.navbar-nav .nav-item');

// Ajusta este valor si el navbar tiene una altura fija
const navbarHeight = document.querySelector('.navbar').offsetHeight || 0;

// Función para actualizar la clase active según el enlace seleccionado
function setActiveNavItem() {
    // Elimina la clase active de todos los elementos
    navItems.forEach(item => item.classList.remove('active'));

    // Itera sobre los elementos para detectar cuál está en la vista
    navItems.forEach(item => {
        const sectionId = item.querySelector('a').getAttribute('href');
        const section = document.querySelector(sectionId);

        if (section) {
            const sectionTop = section.offsetTop - navbarHeight;
            const sectionHeight = section.offsetHeight;
            const scrollPos = window.scrollY + navbarHeight;

            // Verifica si el scroll está en la sección correspondiente
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                item.classList.add('active');
            }
        }
    });
}

// Llama a setActiveNavItem al hacer scroll y al cargar la página
window.addEventListener('scroll', setActiveNavItem);
window.addEventListener('load', setActiveNavItem);
