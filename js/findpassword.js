    // 인증코드 생성
    const generateRandomCode = () => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let resultCode= ' ';
        const charLen = characters.length;
        for ( let i = 0; i < 6; i++ ) {
            resultCode += characters.charAt(Math.floor(Math.random() * charLen));
        }
        return resultCode;
    }

  function sendCertificationNumForPassword() {
    inputVaildate();

    emailjs.init('service_z39v7co');
    let templateParams  = {
        name : document.getElementById('idPw').value,
        email : document.getElementById('emailId').value,
        message : document.getElementById('certificationNumber').value,
    }
    console.log(templateParams);
    emailjs.send('service_z39v7co', 'template_rzfxw6f', templateParams).then(function(response){
        console.log('Success!', response.status, response.text);
        setStatus('success');
    }, function(error){
        console.log('Failed...', error);
        setStatus('fail');
    })
    const inputNumber = document.querySelector("#certificationNumPw").value;
    const certificationCode = generateRandomCode();
    if(certificationCode == inputNumber){
        for(let i = 0; i < memberList.length; i++){
            if(memberList[i].email == document.getElementById('emailId').value &&
                memberList[i].id == document.getElementById('nameId').value) {
                    alert(`본인인증이 완료되었습니다.`);
                    openResetPw();
                    self.close();
                }
                else {
                    alert("입력하신 이름과 이메일를 가진 회원이 조회되지 않습니다.")
                }
        }
    }
    else{
        alert("인증코드가 일치하지 않습니다. 다시 시도해 주세요.");
    }
}


let resettingPassword;
const openResetPw = () => {
    resettingPassword = open("resetPassword.html", "popup", "width=510, height=470, top=300, left=200");
};

function inputVaildate(){
    //1.아이디검사
    //아이디의 길이는(6~16자 영문, 숫자포함)
    if(!/^[a-zA-Z0-9]{6,16}$/.test(id.value)){
        alert('규칙에 맞게 아이디를 6-16자 사이의 숫자를 포함하는 영문자로 입력해주세요.');
        return false;
    }

    // a(?=b)    a이후 b가 나오는 것 매칭. b가 뒤따르는 a를 조회(b는 조회만 하고 최종매칭되지 않는다.)
    //2.비밀번호 확인 검사 
    //숫자/문자/특수문자 포함 형태의 8~16자리 이내의 암호 정규식 
    if(!/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*])[a-z0-9!@#$%&*]{8,16}/i.test(password.value)){
        alert('규칙에 맞게 비밀번호를 8-16자 사이의 영문, 숫자, 특수문자를 포함시켜 만들어 주세요.');
    }

    //비밀번호일치여부 검사
    if(!(password.value === password_confirm.value)){
        alert('비밀번호가 비밀번호 재입력에 입력된 값과 일치하지 않습니다. 다시 입력해주세요.');
        return false;
    }

    //3.이메일 검사
    if(!/^[a-z0-9]{4,12}[@].+[.][a-zA-Z]{2,3}$/i.test(email.value)){
        alert('이메일은 @가 포함되어야 하며, 아이디의 길이는 4~12자리이어야 합니다.');
        return false;
    }
       return true;
}