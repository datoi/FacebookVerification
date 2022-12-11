let database = [];

let user = document.getElementById("username")
let pass = document.getElementById("password")
let button = document.getElementById("log-btn")

  function isuservalid(username, password){
    for(let i=0; i< database.length; i++){
        if(database[i].username === username.value && 
            database[i].password === password.value){
                return true
        }
        
    } 
    return false
}

button.addEventListener("click",function signIn(){
    if(isuservalid(username, password)){
        alert("access")
    } else {
        alert("ERROR")
    }
    isuservalid(user, pass)
})



let registration = document.getElementById("reghead")
let newacc = document.getElementById("newAcc")
let exit = document.getElementById("exit")
newacc.addEventListener("click", function(){
    registration.style.display = "block"
})
exit.addEventListener("click", function(){
    registration.style.display = "none"
})

let newUser = document.getElementById("newUsername")
let newPass = document.getElementById("newPassword")
let signUp = document.getElementById("signUp")

signUp.addEventListener('click' , function(){
   const obj = {
       username: newUser.value,
       password: newPass.value
   }

   database.push(obj)
})
