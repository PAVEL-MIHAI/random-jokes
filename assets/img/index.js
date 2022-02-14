
console.log(" 5 баллов верстка, нет бара ");
console.log(" 10 баллов кнопке в центре работает на play/pause");
console.log(" Пока это всё, что успел");

// -------смена языка---------------------------
// const portfolioBtn = document.querySelector('.play-btn');

// var videoEl = document.getElementsByTagName('.video')[0],
//     playBtn = document.getElementById('.play-btn');


// playBtn.addEventListener('click', function () {
//   if (videoEl.paused) {
//       videoEl.play();
//   } else {
//       videoEl.pause();
//   }

// document.getElementById(".video").style.zIndex = "1";
  
// }, false);

const playBtn = document.querySelector('.play-btn');
const video = document.querySelector('video')

playBtn.addEventListener('click', () => {
    
  document.querySelector('video').play();
  playBtn.style.zIndex = '-1'; 
    
});

video.addEventListener('click', () => {
   
  document.querySelector('video').pause();
  playBtn.style.zIndex = '0'; 
    
});

