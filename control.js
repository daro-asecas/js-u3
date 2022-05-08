function validateForm() {
    let errores = [];
    let corregir = 0;

    let user = document.forms["login"]["user"].value;
    if (user == "") {
        errores.push("No escribiste el usuario.");
        corregir=1;
    }else if (!user.includes("@")) {
        errores.push("El usuario debe contener @.");
        corregir=1;
    }
    let pass = document.forms["login"]["password"].value;
    if (pass == "") {
        errores.push("No escribiste la clave.");
        corregir=1;
    }

    if (corregir == 1) {
        let erroresString = "\n \n" + errores.join("\n \n");
        alert(erroresString);
        alert(corregir);
        return false;
    }
}