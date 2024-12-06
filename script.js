document.addEventListener("DOMContentLoaded", () => {
  console.log("Portofolio Arif Rahman Sholeh berhasil dimuat.");
});

document.addEventListener('DOMContentLoaded', function () {
  const cvButton = document.querySelector('.cv-button');
  
  cvButton.addEventListener('click', function () {
    alert('CV sedang diunduh. Terima kasih telah mengunjungi portofolio saya!');
  });
});