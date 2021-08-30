function login(){
    let user = document.getElementById("user").value;
    let pwd = document.getElementById("pwd").value;
    if(user === "admin" && pwd === "secret"){
        alert("you have successfully signed in");
    }else{
        alert("Invalid credentials");
    }
}