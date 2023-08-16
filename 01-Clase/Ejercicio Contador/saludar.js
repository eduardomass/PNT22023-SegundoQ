let contador = 0;

let vector = []

const botonIncrementar = document.getElementById("incrementar");
const botonDecrementar = document.getElementById("decrementar");

botonIncrementar.addEventListener("click", () => {
  //vector.push('elemento');
  contador++;
  actualizarValor();
});

botonDecrementar.addEventListener("click", () => {
  contador--;
  actualizarValor();
});

function actualizarValor() {
  document.getElementById("contador").textContent = contador;
}