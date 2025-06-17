

document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.animar');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animado');
        observer.unobserve(entry.target); // para não animar de novo
      }
    });
  }, {
    threshold: 0.2
  });

  elementos.forEach(el => observer.observe(el));
});