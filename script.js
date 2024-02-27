// Cerrar el menú desplegable al hacer clic en una categoría
var navLinks = document.querySelectorAll('.navbar-nav li a');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    var collapse = document.querySelector('.navbar-collapse');
    collapse.classList.remove('show');
  });
});