// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Fucionalidades:
// Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

// Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

let listaAmigos = [];
let band = false;
let listaAleatoria = [];
let count = 0;

function agregarAmigo() {
  const input = document.getElementById("amigo");
  validarEntrada(input.value);
  input.value = "";
}

function validarEntrada(input) {
  if (!(typeof input === "string" && input.trim().length > 0)) {
    // console.log("   ", "Tamaño del array: ", listaAmigos.length);
    alert("Por favor, ingrese un nombre válido");
  } else if (duplicado(input) == true) {
    alert("El amigo ya está en la lista");
  } else {
    visualizarLista(input);
    // listaAmigos.length > 1
    //   ? console.log("   ", "Tamaño del array: ", listaAmigos.length)
    //   : null;
    // for (let i = 0; i < listaAmigos.length; i++) {
    //   console.log("Amigos: ", listaAmigos[i]);
    // }
  }
}

function duplicado(input) {
  for (let i = 0; i < listaAmigos.length; i++) {
    if (input === listaAmigos[i]) {
      return true;
    }
  }
  return false;
}

function visualizarLista(input) {
  listaAmigos.push(input);
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = listaAmigos[i];
    lista.appendChild(li);
  }
}

function listaSorteada(lista) {
  listaAleatoria = Array.from(lista);
  for (let i = listaAleatoria.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [listaAleatoria[i], listaAleatoria[j]] = [
      listaAleatoria[j],
      listaAleatoria[i],
    ];
  }
  band = true;
  console.log("Lista sorteada: ", listaAleatoria);
  return listaAleatoria;
}

function sortearAmigo() {
  band != true ? listaSorteada(listaAmigos) : null;
  if (listaAleatoria.length == 0) {
    alert("La lista está vacía");
  } else {
    if (count === listaAleatoria.length) {
      alert("Todos los amigos ya fueron sorteados");
    } else {
      resultado = document.getElementById("resultado");
      resultado.innerHTML = "";
      resultado.innerHTML = listaAleatoria[count];
      count++;
    }
  }
}
