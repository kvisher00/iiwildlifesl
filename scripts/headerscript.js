document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu');
  const navbar = document.querySelector('.navbar');
  const servicesLink = document.querySelector('.dropdown > a');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  mobileMenuButton.addEventListener('click', function () {
    navbar.classList.toggle('show');
  });

  servicesLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (window.innerWidth <= 600) {
      dropdownMenu.classList.toggle('show');
    }
    event.stopPropagation();
  });

  document.addEventListener('click', function () {
    dropdownMenu.classList.remove('show');
  });

  // Prevent closing dropdown when clicking inside it
  dropdownMenu.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
