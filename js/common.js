document.addEventListener("DOMContentLoaded", function() {
  if(sessionStorage.getItem(loginuser)){
    const member = document.querySelector('.member');
    member.style.display = "none";
    const memberlogin = document.querySelector('.member-login');
    memberlogin.style.display = "block";
  }
});

const logout = () => {
  sessionStorage.clear();
  const member = document.querySelector('.member');
  member.style.display = "block";
  const memberlogin = document.querySelector('.member-login');
  memberlogin.style.display = "none";
}


// top 버튼
topBtn = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}