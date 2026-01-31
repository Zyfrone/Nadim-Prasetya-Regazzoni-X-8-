document.addEventListener("DOMContentLoaded", () => {

  const images = [
    'img/smanti1.jpg',
    'img/smanti2.jpg',
    'img/smanti3.jpg'
  ];

  const bg1 = document.querySelector('.bg1');
  const bg2 = document.querySelector('.bg2');
  if (!bg1 || !bg2) return;

  let index = 0;
  let showingBg1 = true;

  // preload gambar
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  bg1.style.backgroundImage = `url(${images[0]})`;
  bg1.style.opacity = 1;
  bg2.style.opacity = 0;

  function changeBackground() {
    const currentBg = showingBg1 ? bg1 : bg2;
    const nextBg = showingBg1 ? bg2 : bg1;

    index = (index + 1) % images.length;

    nextBg.style.backgroundImage = `url(${images[index]})`;
    nextBg.style.opacity = 1;
    currentBg.style.opacity = 0;

    showingBg1 = !showingBg1;
  }

  setInterval(changeBackground, 2000); // ganti tiap 2 detik
});
