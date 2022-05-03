function openFormId() {
    document.getElementById("popupFormId").style.display = "block";
  }
function closeFormId() {
    document.getElementById("formId").reset();
    document.getElementById("popupFormId").style.display = "none";
  }

function openFormPassword() {
    document.getElementById("popupFormPassword").style.display = "block";
  }
function closeFormPassword() {
    document.getElementById("formPassword").reset();
    document.getElementById("popupFormPassword").style.display = "none";
  }

  // 인증번호를 위한 난수 생성
  let certificationNumber = 0;
  function makeNum(){
      while(true){
          certificationNumber = Math.floor(Math.random() * 100000) + 100000;
          console.log(certificationNumber);
          if(certificationNumber >= 100000){
              return;
          }
      }
  }
  
  function sendCertificationNumForId() {
      makeNum();
      console.log(certificationNumber);
      emailjs.init('service_z39v7co');
    let templateParams  = {
        name : document.getElementById('nameId').value,
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
}

function sendCertificationNumForPassword() {
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
}
