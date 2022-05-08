document.querySelector("#login").addEventListener("submit",validateForm);

function validateForm(event) {
    let errores = [];
    let corregir = 0;

    let user = document.querySelector("#user").value;

    if (user == "") {
        errores.push("No escribiste el usuario. Acordate que debe contener @.");
        corregir++;
    }else if (!user.includes("@")) {
        errores.push("El usuario debe contener @.");
        corregir++;
    }
    let pass = document.querySelector("#password").value;
    if (pass == "") {
        errores.push("No escribiste la clave.");
        corregir++;
    }

    if (corregir > 0) {
        let erroresString = "\n \n" + errores.join("\n \n");
        event.preventDefault();
        alert(erroresString);
    }
}