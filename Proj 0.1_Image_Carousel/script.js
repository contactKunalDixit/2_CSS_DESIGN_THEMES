const imgContainer = document.getElementById('imgs');
const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');

const imgArray = document.querySelectorAll('#imgs img');

let imgCount = 0;

let interval = setInterval(run, 3000);

function imgChange() {
  if (imgCount > imgArray.length - 1) {
    imgCount = 0;
  } else if (imgCount < 0) {
    imgCount = imgArray.length - 1;
  }

  imgContainer.style.transform = `translateX(${-imgCount * 500}px)`;
}

function run() {
  imgCount += 1;
  imgChange();
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

prevBtn.addEventListener('click', (e) => {
  console.log(e);
  imgCount -= 1;
  imgChange();
  resetInterval();
});

nextBtn.addEventListener('click', (e) => {
  console.log(e);
  imgCount += 1;
  imgChange();
  resetInterval();
});
