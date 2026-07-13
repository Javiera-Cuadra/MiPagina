function toggleLogosOnScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxWidth = window.innerWidth;

  const logo = document.querySelector('.logo');
  const logo2 = document.querySelector('.logo2');

  if (maxWidth <= 1400) {
    if (scrollTop <= 70) {
      logo?.classList.add('show-logo');
      logo2?.classList.add('show-logo');
    } else {
      logo?.classList.remove('show-logo');
      logo2?.classList.remove('show-logo');
    }
  } else {
    logo?.classList.add('show-logo');
    logo2?.classList.add('show-logo');
  }
}

window.addEventListener('scroll', toggleLogosOnScroll);
window.addEventListener('resize', toggleLogosOnScroll);
document.addEventListener('DOMContentLoaded', toggleLogosOnScroll);

// Selecciona todos los íconos de habilidades
const icons = document.querySelectorAll('.skills_icon');

icons.forEach(icon => {
  let isMouseInside = false;

  icon.addEventListener('mouseenter', () => {
    isMouseInside = true;
    icon.classList.remove('animate-down'); // Limpiamos por si acaso regresó rápido
    icon.classList.add('animate-up');
  });


  icon.addEventListener('animationend', () => {
    // Cuando termina de subir, revisamos: ¿El usuario ya quitó el cursor?
    if (!isMouseInside) {
      icon.classList.remove('animate-up');
      icon.classList.add('animate-down');
    }
  });

  // Cuando el cursor realmente se va, si ya terminó de subir, lo bajamos
  icon.addEventListener('mouseleave', () => {
    isMouseInside = false;
    
    // Si la animación de subida ya NO está activa (ya terminó), bajamos el ícono
    if (!icon.classList.contains('animate-up')) {
      icon.classList.add('animate-down');
    }
  });
});