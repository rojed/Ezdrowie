var objPeople = [
    {
        username: "Robert"
        password: "123456"
    },
    {   username: "Lena"
        password: "456789"

    },
    {
        username: "Sasza"
        password: "987654"
    }
]
function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
 
    for(var i =0, i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password){

        }
            alert(username + " jest zalogowany!");
            console.log(username + " jest zalogowany!");
            return;
        }
        alert("Nieprwidłowy użytkownik lub hasło");
        console.log(username + " jest zalogowany!");
    }
