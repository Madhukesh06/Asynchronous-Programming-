document.querySelector("#btn").addEventListener("click",userData)

let data=JSON.parse(localStorage.getItem("userdata"))||[];
function userData(){
    event.preventDefault();
    
    ob={
        name:form.name.value,
        email:form.email.value,
        pass:form.pass.value,
        num:form.num.value,
    }
    data.push(ob);
    localStorage.setItem("userdata",JSON.stringify(data))

    alert("signup successfull")

    window.location.href="/Async-Prog-Assignment-Template/html/login.html"
}