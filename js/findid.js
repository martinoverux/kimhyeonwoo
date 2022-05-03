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
    inputvaildate();

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
                memberList[i].name == document.getElementById('nameId').value) {
                    alert(`본인인증이 완료되었습니다. 회원님의 아이디는 ${memberList[i].id}입니다.`);
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

function inputvaildate(){
    //1..이름검사 : 한글2글자 이상만 허용. 
    
    // 한글 검사
    if(!/^[가-힣]{2,}$/.test(user_name.value)){
        alert('이름에는 2글자 이상의 한글만 사용할 수 있습니다.');
        return false;
    }

    //2.이메일 검사
    if(!/^[a-z0-9]{4,12}[@].+[.][a-zA-Z]{2,3}$/i.test(email.value)){
        alert('이메일은 @가 포함되어야 하며, 아이디의 길이는 4~12자리이어야 합니다.');
        return false;
    }
       return true;
}
