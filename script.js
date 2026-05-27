const fechaFinal = new Date("Jun 30, 2026 23:59:59").getTime();

setInterval(() => {

  const ahora = new Date().getTime();

  const distancia = fechaFinal - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

}, 1000);


const cards = document.querySelectorAll('.card');

cards.forEach(card => {

  card.addEventListener('click', () => {

    cards.forEach(c => c.classList.remove('selected'));

    card.classList.add('selected');

  });

});