// Obtén el elemento en el que deseas agregar el sonido
const elemento = document.getElementById("mi-elemento");

// Agrega un listener para el evento "click" en el elemento
elemento.addEventListener("click", () => {
  // Obtén el elemento de audio
  const audio = document.getElementById("audio");
  
  // Reproduce el sonido
  audio.play();
});