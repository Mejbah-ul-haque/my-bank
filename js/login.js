document.getElementById('login-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;

    const userPassword = document.getElementById('user-password').value;


    if(userEmail == 'momo@m.com' && userPassword == 'momo'){
        window.location.href = 'banking.html';
        
    }
})