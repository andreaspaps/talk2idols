const canvas = document.getElementById("animation");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "s", "w","!", ">", "δ", "α", "γ", "ξ", "π", "σ","r", "s", "λ", "字", "y", "q", "7", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "t", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "体", "Y", "Z", "&", "$", "#", "ψ", "φ", "τ", "Ω"];
const letters = [];
function drawLetter() {
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);
  const size = Math.floor(Math.random() * 30) + 5;
  const speed = size / 15;
  const opacity = Math.random() * 1 + 0.7;
  const color = "rgba(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + opacity + ")";
  const blur = size / 5;
  const character = chars[Math.floor(Math.random() * chars.length)];
  const letter = {
    x,
    y,
    size,
    speed,
    opacity,
    color,
    blur,
    character,
  };
  letters.push(letter);
}
setInterval(drawLetter, 50);
function updateLetters() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    letter.x += letter.speed;

    if (letter.x > canvas.width + letter.size) {
      letter.x = -letter.size;
    }
    letter.opacity -= 0.02;
    if (letter.opacity <= 0) {
      letters.splice(i, 1);
      i--;
    } else {
      ctx.font = letter.size + "px Arial";
      ctx.fillStyle = letter.color;
      ctx.shadowBlur = letter.blur;
      ctx.shadowColor = letter.color;
      ctx.globalAlpha = letter.opacity;
      ctx.fillText(letter.character, letter.x, letter.y);
    }
  }
}
setInterval(updateLetters, 50);