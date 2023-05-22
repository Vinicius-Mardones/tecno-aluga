// JavaScript para exibir uma mensagem de boas-vindas ao usuário
window.addEventListener('DOMContentLoaded', function() {
    alert('Bem-vindo ao Tecno Aluga!');
  });
  
  // JavaScript para exibir um pop-up de confirmação ao clicar em um link
  var confirmLinks = document.querySelectorAll('a[data-confirm]');
  confirmLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      var confirmation = link.getAttribute('data-confirm');
      if (confirmation && !confirm(confirmation)) {
        event.preventDefault();
      }
    });
  });
  
  // JavaScript para alterar a cor de fundo do cabeçalho quando rolado
  var header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  