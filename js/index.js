const showing_class = "showing";
//엘리먼트 선택
const firstslide = document.querySelector(".visual:first-child");
//firstslide.classList.add(showing_class);

//순차적으로 showing 클래스를 추가해 주는 함수
function slide() {
    const currentSlide = document.querySelector(`.${showing_class}`);
    if(currentSlide){
        currentSlide.classList.remove(showing_class);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(showing_class);
        } else {//넥스트가 없으면 처음으로 돌아 감
            firstslide.classList.add(showing_class);
        }
        
    } else {
        firstslide.classList.add(showing_class);
    }
}

slide();
setInterval(slide, 2000)//인터벌을 주고 반복 한다.



// document.addEventListener('DOMContentLoaded', function(){
//     const slideList = document.querySelector('.slide_list');  // Slide parent dom
//     const slideContents = document.querySelectorAll('.slide_content');  // each slide dom
//     const slideBtnNext = document.querySelector('.slide_btn_next'); // next button
//     const slideBtnPrev = document.querySelector('.slide_btn_prev'); // prev button
//     const pagination = document.querySelector('.slide_pagination');
//     const slideLen = slideContents.length;  // slide length
//     const slideWidth = 400; // slide width
//     const slideSpeed = 300; // slide speed
//     const startNum = 0; // initial slide index (0 ~ 4)
    
//     slideList.style.width = slideWidth * (slideLen + 2) + "px";
    
//     // Copy first and last slide
//     let firstChild = slideList.firstElementChild;
//     let lastChild = slideList.lastElementChild;
//     let clonedFirst = firstChild.cloneNode(true);
//     let clonedLast = lastChild.cloneNode(true);

//     // Add copied Slides
//     slideList.appendChild(clonedFirst);
//     slideList.insertBefore(clonedLast, slideList.firstElementChild);

//     // Add pagination dynamically
//     let pageChild = '';
//     for (let i = 0; i < slideLen; i++) {
//       pageChild += '<li class="dot';
//       pageChild += (i === startNum) ? ' dot_active' : '';
//       pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
//     }
//     pagination.innerHTML = pageChild;
//     const pageDots = document.querySelectorAll('.dot'); // each dot from pagination

//     slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";

//     let curIndex = startNum; // current slide index (except copied slide)
//     let curSlide = slideContents[curIndex]; // current slide dom
//     curSlide.classList.add('slide_active');

//     /** Next Button Event */
//     slideBtnNext.addEventListener('click', function() {
//       if (curIndex <= slideLen - 1) {
//         slideList.style.transition = slideSpeed + "ms";
//         slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
//       }
//       if (curIndex === slideLen - 1) {
//         setTimeout(function() {
//           slideList.style.transition = "0ms";
//           slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
//         }, slideSpeed);
//         curIndex = -1;
//       }
//       curSlide.classList.remove('slide_active');
//       pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('dot_active');
//       curSlide = slideContents[++curIndex];
//       curSlide.classList.add('slide_active');
//       pageDots[curIndex].classList.add('dot_active');
//     });

//     /** Prev Button Event */
//     slideBtnPrev.addEventListener('click', function() {
//       if (curIndex >= 0) {
//         slideList.style.transition = slideSpeed + "ms";
//         slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
//       }
//       if (curIndex === 0) {
//         setTimeout(function() {
//           slideList.style.transition = "0ms";
//           slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
//         }, slideSpeed);
//         curIndex = slideLen;
//       }
//       curSlide.classList.remove('slide_active');
//       pageDots[(curIndex === slideLen) ? 0 : curIndex].classList.remove('dot_active');
//       curSlide = slideContents[--curIndex];
//       curSlide.classList.add('slide_active');
//       pageDots[curIndex].classList.add('dot_active');
//     });

//     /** Pagination Button Event */
//     let curDot;
//     Array.prototype.forEach.call(pageDots, function (dot, i) {
//       dot.addEventListener('click', function (e) {
//         e.preventDefault();
//         curDot = document.querySelector('.dot_active');
//         curDot.classList.remove('dot_active');
        
//         curDot = this;
//         this.classList.add('dot_active');

//         curSlide.classList.remove('slide_active');
//         curIndex = Number(this.getAttribute('data-index'));
//         curSlide = slideContents[curIndex];
//         curSlide.classList.add('slide_active');
//         slideList.style.transition = slideSpeed + "ms";
//         slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
//       });
//     });
//   })();


// document.addEventListener('DOMContentLoaded', function(){
// // 변수 선언
// const sliderWrapper = document.querySelector('.slider-box'), // 슬라이드 전체 컨테이너
//       sliderContainer = document.querySelector('.visual'), // 슬라이드 아이템 컨테이너
//       btnPrev = document.querySelector('.bx-prev'), // 이전 버튼
//       btnNext = document.querySelector('.bx-next'); // 다음 버튼
// let slides = document.querySelector('.bx-pager-item'), // 슬라이드 아이템
//     slideCount = slides.length, // 슬라이드 갯수
//     currentIndex = 0, // 현재 슬라이드
//     timer = undefined,
//     pagerHTML = '';

// 슬라이드 아이템의 높이를 확인하여 부모의 높이로 지정
// let topHeight = slides[0].offsetHeight;
// function calculateTallsetSlide() {
//   for(let i = 0; i < slideCount; i++) {
//     if(slides[i].offsetHeight > topHeight) {
//       topHeight = slides[i].offsetHeight;
//     }
//   }
//   sliderContainer.style.height = topHeight + 'px';
//   sliderWrapper.style.height = topHeight + 'px';
// }
// calculateTallsetSlide();

// // 슬라이드 아이템 자동으로 가로 정렬 및 갯수만큼 페이지네이션 버튼 자동 생성
// for(let i = 0; i < slideCount; i++) {
//   slides[i].style.left = `${i * 100}%`;
//   pagerHTML += `<li data-index="${i}">${i + 1}</li>`;
//   pagerContainer.innerHTML = pagerHTML;
// }
// let pagerBtns = document.querySelectorAll('bx-pager-item');

// // 슬라이드 이동 함수
// function goToSlide(idx) {
//   sliderContainer.classList.add('animated');
//   sliderContainer.style.left = `${idx * -100}%`;
//   currentIndex = idx;
//   pagerBtns.forEach(pagerBtn => {
//     pagerBtn.classList.remove('active');
//   });
//   pagerBtns[idx].classList.add('active');
// }
// goToSlide(0);

// // 버튼을 클릭시 슬라이드 이동
// btnPrev.addEventListener('click', () => {
//   if(currentIndex != 0) {
//     goToSlide(currentIndex - 1);
//   } else {
//     goToSlide(slideCount - 1);
//   }
// });
// btnNext.addEventListener('click', () => {
//   if(currentIndex < slideCount - 1) {
//     goToSlide(currentIndex + 1);
//   } else {
//     goToSlide(0);
//   }
// });

// // 버튼 기능 업데이트 함수
// function updateNav() {
//   if(currentIndex == 0) {
//     btnPrev.classList.add('disabled');
//   }else {
//     btnPrev.classList.remove('disabled');
//   }
//   if(currentIndex == slideCount - 1) {
//     btnNext.classList.add('disabled');
//   }else {
//     btnNext.classList.remove('disabled');
//   }
// }

// // 자동 슬라이드 함수
// function startAutoSlide() {
//   timer = setInterval(() => {
//     let nextIndex = (currentIndex + 1) % slideCount;
//     goToSlide(nextIndex);
//   }, 4000);
// }
// startAutoSlide();

// sliderWrapper.addEventListener('mouseenter', () => {
//   clearInterval(timer);
// });
// sliderWrapper.addEventListener('mouseleave', () => {
//   startAutoSlide();
// });

// // 페이지네이션 클릭시 슬라이드 이동 함수 호출
// pagerBtns.forEach(pagerBtn => {
//   pagerBtn.addEventListener('click', (event) => {
//     let pagerNum = event.target.dataset.index;
//     goToSlide(pagerNum);
//   });
// });


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
// });