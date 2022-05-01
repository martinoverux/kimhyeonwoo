document.addEventListener("DOMContentLoaded", function() {

// Get the button that opens the modal
const btn = document.querySelectorAll("button.modal-custom-button");

// All page modals
const modals = document.querySelectorAll('.modal-custom');

// Get the <span> element that closes the modal
const spans = document.getElementsByClassName("close-modal");

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = 'block';
    }
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.classList.contains('modal-custom')) {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

const tabList = document.querySelectorAll('.tab_menu .column-list li');
const contents = document.querySelectorAll('.column-contents .cont_area .cont');
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(let i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn-tab').addEventListener('click', function(e){
    e.preventDefault();
    for(let j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('is_on');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('is_on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}


});
