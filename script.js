let usr=document.getElementById("uname");
let pwd=document.getElementById("password");
function validate(usr,pwd,callback){
//     if(usr.value=='admin'&& pwd.value=="12345"){
//         callback();
//     }
//     else{
//         alert("Invalid login");
//     }
// }
// validate(use,pwd,display(){
//     window.setTimeout(display(){
//         window.location.href="home.html";
        
//     }, 3000);
// });
if(usr.checkValidity()==true){
    window.location.href="home.html"; 
}
}