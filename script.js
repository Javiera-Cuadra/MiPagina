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