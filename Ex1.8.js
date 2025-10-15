let message;

if (Login == "Employee") {
    message = "Hello";
}   else if (Login == "Director") {
    message = "Greetings";
}   else if (Logon == "") {
    message = "No Login" ;
}   else {
    message = "" ;
}


let message = (Login == "Employee") ? "Hello" :
              (Login == "Director") ?"Greetiings" :
              (Login == "") ? "No Login" :
              "" ;  