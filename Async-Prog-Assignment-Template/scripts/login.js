
document.querySelector("#btn").addEventListener("click",loginCred)

let data=JSON.parse(localStorage.getItem("userdata"))||[];

function loginCred(){
    event.preventDefault();

    let em=document.querySelector("#email").value;
    let pas=document.querySelector("#pass").value;
    
   data.forEach(function(el){
    if(el.email===em && el.pass===pas){
        alert("Login Successfull")
        window.location.href="/Async-Prog-Assignment-Template/html/index.html";
    }
    else{
     alert("Enter correct credentials")
    }
   });
}