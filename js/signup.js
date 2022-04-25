
        $('#form-signup input').each(function(){
            $(this).on("input", function(){
                availableSignUp()
            });
        });

        function availableSignUp(){
            const isEmpty = false;
            $('#form-signup input').each(function(){
                if($(this).attr('id') == 'email' || $(this).attr('id') == 'emailauth-check-value'){
                    if($('#email').val().length != 0 && $('#emailauth-check-value').val().length == 0){
                        isEmpty = true;
                    }   
                }
                else{
                   
                    if($(this).attr('type') != 'hidden' 
                        && $.inArray($(this).attr('id'), uncheckList) < 0
                        && $(this).val().length == 0){
                        isEmpty = true;
                    }
                }
            });

            if(isEmpty){
                $('#btn-signup').prop('disabled', true);
                $('#btn-signup').addClass('btn-disabled');
            }
            else{
                $('#btn-signup').prop('disabled', false);
                $('#btn-signup').removeClass('btn-disabled');
            }
        }

        $('#id').setValidationId('error-id');
        $('#password').setValidationPassword('error-password', 'id');
        $('#password-confirm').setValidationPasswordConfirm('error-password-confirm', 'password')
        $('#hp').setValidationPhone('error-hp');
        $('#email').setValidationEmail('error-email');

        function checkId() {
            $('#error-id').hideError();
            $('#success-id').hideError();
            const id = $('#id').val();

            $.ajax({
                "url": '/check-id',
                "type": "GET",
                "data": {
                    id: id
                },
                success: function(response){
                    $('#success-id').text(response.msg);
                    $('#success-id').showError();
                },
                error: function(request, status, err) {
                    const response = request.responseJSON
                    if(request.status == 500){
                        alert(response.msg);
                    }
                    else{
                        $("#"+response.data.id).showError(response.data.content);
                        $("#"+response.data.focusId).focus();
                    }
                }
            });
        }



        const smsAuthTimer =  new AuthTimer('smsauth-check-count');
        function reqSmsAuth() {
            $('#error-hp').hideError();
            $('#success-smsauth-check').hideError();
            $('#error-smsauth-check').hideError();

            const hp = $('#hp').val();
            $.ajax({
                "url": '/smsauth-req',
                "type": "POST",
                "data": {
                    refer: "signup",
                    hp: hp,
                },
                success: function(response){
                    $('#smsauth-check-value').val('');
                    $('#smsauth-check-area').show();
                    smsAuthTimer.startTimer();
                },
                error: function(request, status, err) {
                    const response = request.responseJSON
                    if(request.status == 500){
                        alert(response.msg);
                    }
                    else{
                        $('#error-hp').showError(response.msg);
                    }
                }
            });
        }

        function checkSmsAuth() {
            $('#error-hp').hideError();
            $('#success-smsauth-check').hideError();
            $('#error-smsauth-check').hideError();

            const hp = $('#hp').val();
            const authNumber = $('#smsauth-check-value').val();
            $.ajax({
                "url": '/smsauth-check',
                "type": "POST",
                "data": {
                    refer: "signup",
                    hp: hp,
                    auth_number: authNumber,
                },
                success: function(response){
                    smsAuthTimer.stopTimer();
                    $('#success-smsauth-check').show();
                    $('#success-smsauth-check').text(response.msg);
                },
                error: function(request, status, err) {
                    const response = request.responseJSON
                    if(request.status == 500){
                        alert(response.msg);
                    }
                    else{
                        $('#error-smsauth-check').showError(response.msg);
                    }
                }
            });
        }


        const emailAuthTimer =  new AuthTimer('emailauth-check-count');
        function reqEmailAuth() {
            $('#error-email').hideError();
            $('#success-emailauth-check').hideError();
            $('#error-emailauth-check').hideError();

            const email = $('#email').val();
            $.ajax({
                "url": '/emailauth-req',
                "type": "POST",
                "data": {
                    refer: "signup",
                    email: email,
                },
                success: function(response){
                    console.log(response);
                    $('#emailauth-check-value').val('');
                    $('#emailauth-check-area').show();
                    emailAuthTimer.startTimer();
                },
                error: function(request, status, err) {
                    const response = request.responseJSON
                    if(request.status == 500){
                        alert(response.msg);
                    }
                    else{
                        $('#error-email').showError(response.msg);
                    }
                }
            });
        }
        function checkEmailAuth() {
            $('#error-email').hideError();
            $('#success-emailauth-check').hideError();
            $('#error-emailauth-check').hideError();

            const email = $('#email').val();
            const authNumber = $('#emailauth-check-value').val();
            $.ajax({
                "url": '/emailauth-check',
                "type": "POST",
                "data": {
                    refer: "signup",
                    email: email,
                    auth_number: authNumber,
                },
                success: function(response){
                    emailAuthTimer.stopTimer();
                    $('#success-emailauth-check').show();
                    $('#success-emailauth-check').text(response.msg);
                },
                error: function(request, status, err) {
                    const response = request.responseJSON
                    if(request.status == 500){
                        alert(response.msg);
                    }
                    else{
                        $('#error-emailauth-check').showError(response.msg);
                    }
                }
            });
        }

        $("#form-signup").submit(function(e){
            e.preventDefault();

            $(this).find('.error-item').hideError();
            $(this).find('.success-item').hideError();

            const form = $(this);
            $.ajax({
                "url": '/signup',
                "type": "POST",
                "data": form.serialize(),
                success: function(response){
                        window.location.href = response.redirect_url;
                },
                error: function(request, status, err) {
                    var response = request.responseJSON
                    if(request.status == 500){
                        alert(response.msg);
                    }
                    else{
                        $("#"+response.data.id).showError(response.data.content);
                        $("#"+response.data.focusId).focus();
                    }
                }
            });
            return false;
        })
    