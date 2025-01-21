console.log("Hola mi buen amigo");
var a = 1;
var b = 2;
var c = a + b;
console.log(c);

var hizoClick = function () {
    alert("Saludando desde una función");
}

var login = function () {
    console.log("Esta intentando iniciar sesión");
    var email = document.getElementById("staticEmail");
    var pass = document.getElementById("inputPassword");

    console.log(email.value);
    console.log(pass.value);

    /** Validar usuario y contraseña 
    if (email.value === "admin@mail.com" && pass.value === "1q2w3e4r") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("No puede ingresar");
    }
    */
    var cond = (email.value === "admin@mail.com" && pass.value === "1q2w3e4r");
    var msj = cond ? "Inicio de sesión exitoso" : "No puede ingresar";
    alert(msj);

}

var clean = function () {
    var email = document.getElementById("staticEmail");
    var pass = document.getElementById("inputPassword");

    email.value = "";
    pass.value = "";
}