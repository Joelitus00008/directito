function startTimer() {
  setTimeout(() => {
    document.getElementById('player').style.display = 'none';
    document.getElementById('pago').style.display = 'block';
  }, 30 * 60 * 1000); // 30 minutos
}
