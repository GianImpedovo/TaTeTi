window.onload = iniciar;

function iniciar()  {
    let btn = document.getElementById("btn-submit");
    btn.onclick = cargarForm;

}

function cargarForm() {
    let j1 = document.getElementById("j1");
    let j2 = document.getElementById("j2");

    let form = document.getElementById("formulario");

    form.submit()
}