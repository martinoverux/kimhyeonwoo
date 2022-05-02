document.addEventListener("DOMContentLoaded", function(){
// 변수 선언
const sliderWrapper = document.querySelector('.bx-viewport'), // 슬라이드 전체 컨테이너
      sliderContainer = document.querySelector('.slider-box'), // 슬라이드 아이템 컨테이너
      btnPrev = document.querySelector('.bx-prev'), // 이전 버튼
      btnNext = document.querySelector('.bx-next'), // 다음 버튼
      pagerContainer = document.querySelector('.imagePager');

let slides = document.querySelectorAll('.visual'), // 슬라이드 아이템
    slideCount = slides.length, // 슬라이드 갯수
    currentIndex = 0, // 현재 슬라이드
    timer = undefined,
    pagerHTML = '';




// 슬라이드 아이템 자동으로 가로 정렬 및 갯수만큼 페이지네이션 버튼 자동 생성
for(let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
  pagerHTML += `<li data-index="${i}"></li>`;

  pagerContainer.innerHTML = pagerHTML;
}
  let pagerBtns = document.querySelectorAll('.imagePager li');

// 이미지 전환을 매끄럽게 하기 위한 이미지 복사 함수
  
// const cloneElement = () => { 
//   sliderContainer.prepend(slides[slides.length -1].cloneNode(true)); 
//   sliderContainer.append(slides[0].cloneNode(true)); 
// };
// cloneElement();

  // 슬라이드 이동 함수
  function goToSlide(idx) {

    sliderContainer.classList.add('animated');
    sliderContainer.style.left = `${idx * -100}%`;
    currentIndex = idx;
    
    pagerBtns.forEach(pagerBtn => {
      pagerBtn.classList.remove('active');
    });
    pagerBtns[idx].classList.add('active');
  }
  
  goToSlide(0);

  // 버튼을 클릭시 슬라이드 이동
  btnPrev.addEventListener('click', () => {
    if(currentIndex != 0) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(slideCount - 1);
    }
  });
  btnNext.addEventListener('click', () => {
    if(currentIndex < slideCount - 1) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(0);
    }
  });

// 버튼 기능 업데이트 함수
function updateNav() {
  if(currentIndex == 0) {
    btnPrev.classList.add('disabled');
  }else {
    btnPrev.classList.remove('disabled');
  }
  if(currentIndex == slideCount - 1) {
    btnNext.classList.add('disabled');
  }else {
    btnNext.classList.remove('disabled');
  }
}

// 자동 슬라이드 함수
function startAutoSlide() {
  timer = setInterval(() => {
    let nextIndex = (currentIndex + 1) % slideCount;
    goToSlide(nextIndex);
  }, 3000);
}
startAutoSlide();

sliderWrapper.addEventListener('mouseenter', () => {
  clearInterval(timer);
});
sliderWrapper.addEventListener('mouseleave', () => {
  startAutoSlide();
});

// 페이지네이션 클릭 시 슬라이드 이동 함수 호출
pagerBtns.forEach(pagerBtn => {
  pagerBtn.addEventListener('click', (event) => {
      console.log(event.target);
    let pagerNum = event.target.dataset.index;
    goToSlide(pagerNum);
  });
});
});



