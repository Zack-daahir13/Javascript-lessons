let passtogler = document.querySelector('#passwordtogler');
let inputpass = document.querySelector('#password');

function togle(){
    inputpass.type=="password" ? inputpass.type= "text"
              : inputpass.type="password";
}
passtogler.addEventListener("click", togle)



                    //Author Code: Zack daahir