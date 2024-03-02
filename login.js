const prn=document.getElementById('username');
const pass=document.getElementById('password');
const btn=document.getElementById('submit');

btn.addEventListener('click',()=>{
   
    console.log(prn.value);
    console.log(pass.value);
    if(prn.value=="admin" && pass.value=="admin"){
        Swal.fire({
            title: "Login Successful",
            text: "Welcome to the dashboard!",
            icon: "success"
        });
    }
    else{
        Swal.fire({
            title: "Login Failed",
            text: "Invalid PRN or Password!",
            icon: "error"
        });
    }
});



    