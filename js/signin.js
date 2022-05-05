  let newWindowId;
  const openFindId = () => {
    newWindowId = open("findid.html", "popup", "width=510, height=430, top=300, left=200");
  };

  let newWindowPw;
  const openFindPassword = () => {
    newWindowPw = open("findpassword.html", "popup", "width=510, height=450, top=300, left=200");
  };

  let newWindowQue;
  const memberquery = () => {
    newWindowQue = open("memberquery.html", "popup", "width=1024, height=900, top=300, left=200");
  };


  document.addEventListener('submit', (memberList = JSON.parse(localStorage.getItem('memberList'))) => {
    const inputidVal = document.querySelector("#input-user-id").value;
    const inputpasswordVal = document.querySelector("#input-password").value;
    for(let i = 0; i < memberList.length; i++){
        if(memberList[i].userid == inputidVal && memberList[i].userpassword == inputpasswordVal) {
            const loginuser = new User(inputidVal, inputpasswordVal);
            sessionStorage.setItem("user", JSON.stringify(loginuser));
            alert(`${memberList[i].username}님 환영합니다!`);
            document.querySelector('#login-form').reset();
            loginIndex();
        }
    }
  });

  class User {
    constructor(userid, userpassword){
        this.userid = userid;
        this.userpassword = userpassword;
    }
  }

  function loginIndex() {
    location.href = "index.html";
  }