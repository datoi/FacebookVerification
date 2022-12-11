let database = [
    {
        username: "admin",
        password: "123"
    },
    {
        username: "ceo",
        password: "456"
    },
    {
        username: "leader",
        password: "789"
    }
];

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
