const d = document;
const $dias = d.getElementById('dias');
const $horas = d.getElementById('horas');
const $minutos = d.getElementById('minutos');
const $segundos = d.getElementById('segundos');

export default function count(date) {
  const dateNew = new Date(date);
  let result = null;
  let countDown = setInterval(() => {
    result = dateNew.getTime() - new Date().getTime();

    let day = ('0' + Math.floor(result / (1000 * 60 * 60 * 24))).slice(-2);

    let hours = (
      '0' + Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);

    let minutes = (
      '0' + Math.floor((result % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);

    let seconds = ('0' + Math.floor((result % (1000 * 60)) / 1000)).slice(-2);

    $dias.innerHTML = day;
    $horas.innerHTML = hours;
    $minutos.innerHTML = minutes;
    $segundos.innerHTML = seconds;
  }, 1000);
}
