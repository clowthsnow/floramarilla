var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Holi mascota", time: 19 },
  { text: "Espero te guste", time: 23 },
  { text: "Este pequeño detalle", time: 27 },
  { text: "Se que no es mucho", time: 31 },
  { text: "Pero lo hice de corazón", time: 35 },
  { text: "Pensando en ti.", time: 39 },
  { text: "Quiza no pude darte", time: 44 },
  { text: "Flores de verdad", time: 48 },
  { text: "Pero espero que", time: 52 },
  { text: "Esto cubra en algo xd", time: 56 },
  { text: "Son las primeras", time: 60 },
  { text: "Flores amarillas que te doy", time: 64 },
  { text: "Pero no seran las ultimas", time: 68 },
  { text: "Gracias por soportarme", time: 72 },
  { text: "Y apoyarme", time: 76 },
  { text: "Lo habia planeado ", time: 80 },
  { text: "Un poco diferente", time: 84 },
  { text: "Pero a veces las cosas", time: 88 },
  { text: "No salen como planeo", time: 92 },
  { text: "Bueno casi siempre", time: 96 },
  { text: "Perdon por la demora", time: 100 },
  { text: "Jejeje ya se que te dieron", time: 104 },
  { text: "Tus flores mas temprano", time: 108 },
  { text: "Pero espero que estas", time: 112 },
  { text: "Te gusten", time: 116 },
  { text: "Aunque sea un poco xd", time: 120 },
  { text: "Sabes, me alegra que", time: 124 },
  { text: "Reaparecieras en mi vida", time: 128 },
  { text: "Gracias por apoyarme", time: 132 },
  { text: "En mis peores dias", time: 136 },
  { text: "Gracias por hacerme reir", time: 140 },
  { text: "Con tus payasadas xd", time: 144 },
  { text: "No te estoy diciendo payasa", time: 148 },
  { text: "Como crees jajajajaja", time: 152 },
  { text: "Eres una gran persona", time: 156 },
  { text: "Superaras todo esta etapa", time: 160 },
  { text: "Veraz que si", time: 164 },
  { text: "Tratare de apoyarte siempre", time: 168 },
  { text: "Y estare para ti", time: 172 },
  { text: "Cuando lo necesites", time: 176 },
  { text: "Gracias por engreirme", time: 180 },
  { text: "Perdon x ser como soy a vcs", time: 184 },
  { text: "Te quiero mucho mi especial", time: 188 },
  { text: "Espero te haya gustado", time: 192 },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

setTimeout(ocultarTitulo, 18000);