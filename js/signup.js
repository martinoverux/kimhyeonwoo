function searchAddress() {
    const width = 500;
    const height = 600;
    new daum.Postcode({
        width: width,
        height: height,
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            let addr = ''; // 주소 변수
            let extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("extraAddress").value = extraAddr;
                
            } else {
                document.getElementById("extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById("address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("address_detail").focus();
        }
    }).open({
        left: (window.screen.width /2 ) -(width / 2 ),
        height: (window.screen.height /2 ) -(height / 2 )
    });
}

 function signUpVaildate(){
    //1.아이디검사
    //아이디의 길이는(6~16자 영문, 숫자포함)
    if(!/^[a-zA-Z0-9]{6,16}$/.test(id.value)){
        alert('규칙에 맞게 아이디를 6-16자 사이의 숫자를 포함하는 영문자로 만들어 주세요.');
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

    //3.이름검사 : 한글2글자 이상만 허용. 
    
    // 한글 검사
    if(!/^[가-힣]{2,}$/.test(user_name.value)){
        alert('이름에는 2글자 이상의 한글만 사용할 수 있습니다.');
        return false;
    }

    //4. 휴대폰 번호 검사
    // 01x 시작, 총 10~11자리
    // 숫자 여부 검사
    
    if(!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(phone.value)){
        alert('전화번호에는 숫자만 입력해야 합니다.');
        return false;
    }

    //5.이메일 검사
    if(!/^[a-z0-9]{4,12}[@].+[.][a-zA-Z]{2,3}$/i.test(email.value)){
        alert('이메일은 @가 포함되어야 하며, 아이디의 길이는 4~12자리이어야 합니다.');
        return false;
    }
       return true;
}

function checkId() {
 ;
}


