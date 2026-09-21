let pantalla = document.getElementById("Pantalla");

function Agregar(dato){
    Pantalla.value += dato;
}

function Eliminar(){
    Pantalla.value = "";
}

function Borrar(dato){
    Pantalla.value = dato = " ";
}

function Calcular(){
    Pantalla.value = eval(Pantalla.value)
}