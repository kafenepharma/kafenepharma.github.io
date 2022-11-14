$(document).ready(function () {
    if(localStorage.getItem('loginStatus') == 'true'){
        location.assign('./orders.html')
    }
    let loginForm = window.document.getElementById('loginform');
    loginForm.onsubmit = function (a) {
        a.preventDefault();
        let logincredential = {
            username: this.username.value,
            password: this.password.value
        }
        if (logincredential.username === logincredential.password) {
           
            $.post("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",logincredential,
                function (data, textStatus, jqXHR) {
                    alert('Login Successful!!')
                    window.localStorage.setItem('loginStatus',true)
                    location.replace('./orders.html')
                },
                
            );
        } else {
            alert(`Please Enter Valid Credentials ${logincredential.username} ${logincredential.password}`)
        }
    }
    $('.topbar-menu-items').click(function (a) { 
        a.preventDefault();
        $('.active').removeClass('active');
        $(a.target).addClass('active')
        
    });
});