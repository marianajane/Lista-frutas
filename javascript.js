function agregarFrutas() {
    var listaFrutas= document.getElementById("frutas").value;
    console.log (listaFrutas);
    var loQueSea = "<li>" + listaFrutas + "</li>";
    document.getElementById("lista").innerHTML += loQueSea;
  }
