function signUpVaildate(){
    //1..비밀번호 확인 검사 
    //숫자/문자/특수문자 포함 형태의 8~16자리 이내의 암호 정규식 
    if(!/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*])[a-z0-9!@#$%&*]{8,16}/i.test(password.value)){
        alert('규칙에 맞게 비밀번호를 8-16자 사이의 영문, 숫자, 특수문자를 포함시켜 만들어 주세요.');
    }

    //비밀번호일치여부 검사
    if(!(password.value === password_confirm.value)){
        alert('비밀번호가 비밀번호 재입력에 입력된 값과 일치하지 않습니다. 다시 입력해주세요.');
        return false;
    }
       alert("비밀번호 재설정이 완료되었습니다.")
       return true;
}

function checkId(){
    const useridVal = document.querySelector("#inputid").value;
    const memberList = JSON.parse(localStorage.getItem('memberList')) || [];
    
    function inputIdValue() {
        // 중복검사에 통과된 아이디의 값을 해당 필드에 넣는다.
        opener.document.querySelector("#id").value = useridVal;
        
        // 커서를 비밀번호 필드로 이동한다.
        opener.document.querySelector("#password").focus();
    
        // 현재 창 닫기
        self.close();
    }

        if(memberList.length == 0){
            alert("사용할 수 있는 아이디입니다.");
            inputIdValue(useridVal);
        }
        else{
            for(let i = 0; i < memberList.length; i++){
                if(memberList[i].userid == useridVal) {
                    alert("중복되는 아이디가 이미 있습니다. 다른 아이디를 사용해주세요.");
                    document.querySelector('#formId').reset();
                }
                else {
                    alert("사용할 수 있는 아이디입니다.");
                    inputIdValue();
                }
            }
        }
    }