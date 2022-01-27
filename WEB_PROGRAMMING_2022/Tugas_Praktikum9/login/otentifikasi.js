const login = document.querySelector('#login');
    login.addEventListener('click', function(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    
    if(username == "Achmadfauzan123" && password == "fauzan208"){
        alert('benar')
        document.body.innerHTML="<h1>ANDA BERHASIL LOGIN</h1>"
    }else{
        alert('password salah\nmasukkan\nusername: Achmadfauzan123\npassword: fauzan208')
    }
    })