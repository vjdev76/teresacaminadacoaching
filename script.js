var navLinks = document.querySelectorAll('.navbar-nav li a');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    var collapse = document.querySelector('.navbar-collapse');
    collapse.classList.remove('show');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
