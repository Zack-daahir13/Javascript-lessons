let darkmode =document.querySelector("#darkmode");
   darkmode.addEventListener("click", function(){
   let body = document.body;
   body.classList.toggle("darkmode");
   console.log(body.classList);
   body.classList.contains("darkmode")
                    ? darkmode.innerHTML ="🌙"
                    : darkmode.innerHTML ="🌑"
   })





                           //Author Code: Zack daahir