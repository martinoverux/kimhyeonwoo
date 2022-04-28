// 변수 선언
const sliderWrapper = document.querySelector(), // 슬라이드 전체 컨테이너
      sliderContainer = document.querySelector(), // 슬라이드 아이템 컨테이너
      btnPrev = document.querySelector(), // 이전 버튼
      btnNext = document.querySelector(); // 다음 버튼
let slides = document.querySelector(), // 슬라이드 아이템
    slideCount = slides.length, // 슬라이드 갯수
    currentIndex = 0; // 현재 슬라이드

// 슬라이드 아이템의 높이를 확인하여 부모의 높이로 지정(부모의 높이가 지정되지 않았을 경우 사용)
let topHeight = slides[0].offsetHeight;
function claculateTallsetSlide() {
    //for(시작; 끝값(조건); 증감){반복할 코드}
    for(let i = 0; i < slideCount; i++){
        if(slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }
    sliderContainer.style.height = `${topHeight}px`;
    sliderWrapper.style.height = `${topHeight}px`;
};

claculateTallsetSlide(); // 슬라이드의 제일 높은 것을 계산

// position:absolute 지정한 곳에 위치한 슬라이드 아이템을 왼쪽 가로로 정렬
for(let i = 0; i < slideCount; i++){
    slides[i].style.left = `${i * 100}%`;
}

// 버튼 클릭 시 슬라이드 아이템 이동
btnPrev.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});
btnNext.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

// 현재 인덱스 번호에 해당하는 슬라이드 아이템을 오른쪽으로 부드럽게 이동시켜 표시

function goToSlide(idx) {
    sliderContainer.style.left = `${idx * -100}%`;
    sliderContainer.classList.add('animated');
    currentIndex = idx;
    updateNav();
}

// 슬라이드 아이템이 처음이거나 마지막인 경우 이전 또는 다음 버튼이 사라지는 함수
function goToSlide(idx) {
    upadateNav();
};
function updateNave() {
    if(currentIndex == 0){
        btnPrev.classList.add('disabled');
    }
    else {
        btnPrev.classList.remove('disabled');
    }

    if(currentIndex == slideCount - 1){
        btnNext.classList.add('disabled');
    }
    else {
        btnNext.classList.remove('disabled');
    }
}
goToSlide(0);

//버튼 클릭 시 슬라이드 아이템 이동 + 슬라이드 무한 반복 기능 추가
btnPrev.addEventListener('click', () => {
    if(currentIndex != 0){
        goToSlide(currentIndex - 1);
    }
    else {
        goToSlide(slideCount -1);
    }
});
btnNext.addEventListener('click', () => {
    if(currentIndex < slideCount -1) {
        goToSlide(currentIndex + 1);
    } else {
        goToSlide(0);
    }
});

// 자동 슬라이드
setInterval(() => {
    let nextIndex = (currentIndex + 1) % slideCount;
    goToSlide(nextIndex);
}, 2500);

// 이미지에 호버 시 자동 슬라이드 멈춤
function startAutoSlide() {
    timer = setInterval(() => {
        let nextIndex = (currentIndex + 1) % slideCount;
        goToSlide(nextIndex);
        console.log(nextIndex);
    }, 2500);
}

startAutoSlide();

sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(timer);
});
sliderWrapper.addEventListener('mouseleave', () => {
    startAutoSlide();
});

// 페이지네이션 구현
pagerBtns.forEach(pagerBtn => {
    pagerBtn.addEventListener('click', (e) => {
        let pagerNum = e.target.dataset.index;
        goToSlide(pagerNum);
    })
})

// document.addEventListener('DOMContentLoaded', function(){ 
    
//     // 변수 지정
//     var $slideWrap = document.querySelector('.container'),
//         $slideContainer = document.querySelector('.slider-container'),
//         $slide = document.querySelectorAll('.slide'),
//         $navPrev = document.getElementById('prev'),
//         $slideHeight = 0,
//         $slideCount = $slide.length,
//         $currentIndex = 0,
//         $pager = document.querySelector('.pager'),
//         $pagerBtn = document.querySelectorAll('.pager span'),
//         $navNext = document.getElementById('next');
                   
//         //슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
//         for(var i = 0; i < $slideCount ; i++){
//            if($slideHeight < $slide[i].offsetHeight){
//                 $slideHeight = $slide[i].offsetHeight;
//            }
//         }
//         console.log($slideHeight);

//         $slideWrap.style.height = $slideHeight +'px';
//         $slideContainer.style.height = $slideHeight +'px';

//         // 슬라이드가 있으면 가로로 배열하기
//         for(var a = 0; a < $slideCount; a++){
//             $slide[a].style.left = a * 100 + '%'; 
//         }

       

//         // 슬라이드 이동 함수 
//         function goToSlide(idx){
//             $slideContainer.classList.add('animated');
//             $slideContainer.style.left = -100 * idx + '%';
//             $currentIndex = idx;         
//         }//goToSlide

//         goToSlide(0);

//         // 버튼을 클릭하면 슬라이드 이동시키기
//         $navPrev.addEventListener('click',function(){            
//             //goToSlide($currentIndex - 1);

//             if($currentIndex == 0){
//                 //$navPrev.classList.add('disabled');
//                 goToSlide($slideCount - 1);
//             }else{
//                 //$navPrev.classList.remove('disabled');
//                 goToSlide($currentIndex - 1);
//             } 
//         });

//         $navNext.addEventListener('click',function(){
//             //goToSlide($currentIndex + 1);

//            if($currentIndex == $slideCount - 1){
//                // $navNext.classList.add('disabled');
//                goToSlide(0);
//            }else{
//                // $navNext.classList.remove('disabled');
//                goToSlide($currentIndex + 1);
//            }
//         });

//     //자동 슬라이드
   

// });//DOMcontentloaded