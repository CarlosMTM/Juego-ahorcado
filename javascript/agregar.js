let palabras = ["JERICA", "jUNIOR", "ESTUFA", "KAELY","NEVERA", "CUADERNO", "MAMA", "GATO", "PROGRAMADOR", "INTERNET", "ALURA"];
let btnAdd = document.querySelector("#btn-add");
let error = document.querySelector(".error");
let success = document.querySelector(".success");
let regex = /^[a-zA-Z]+$/g;

btnAdd.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#newWord");
    let palabra = (form.palabra.value);

    
    if (palabra.match(regex)){
        if (!error.classList.contains("hide")){
            error.classList.add("hide");
        }
        palabras.push((palabra).toUpperCase());
        success.classList.remove("hide");
        form.reset();
        setTimeout(() => {
            success.classList.add("hide");
        },2000);
    }
    else {
        error.classList.remove("hide");
        form.reset();
    }

    
});