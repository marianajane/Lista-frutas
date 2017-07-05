function agregarFrutas() {
    var listaFrutas= document.getElementById("frutas").value;
    console.log (listaFrutas);
    var contenido = "<li>" + listaFrutas + "</li>";
    document.getElementById("lista").innerHTML += contenido;
  }
