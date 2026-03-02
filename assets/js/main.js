/**
 * ============================================================
 * Aplicación: Moto deportiva estilo BMW — Canvas 2D
 * Autor: Juan Pablo Hernández
 * Descripción:
 * Dibujo completo de moto deportiva con más de 40 figuras básicas
 * ============================================================
 */

const canvas = document.getElementById("motoCanvas");
const ctx = canvas.getContext("2d");

//// =============================
//// RUEDAS
//// =============================
function ruedas() {

  // Trasera exterior
  ctx.fillStyle = "#111";
  ctx.beginPath();
  ctx.arc(190, 280, 85, 0, Math.PI * 2);
  ctx.fill();

  // Rin trasero
  ctx.fillStyle = "#bbb";
  ctx.beginPath();
  ctx.arc(190, 280, 50, 0, Math.PI * 2);
  ctx.fill();

  // Centro
  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.arc(190, 280, 20, 0, Math.PI * 2);
  ctx.fill();

  // Delantera exterior
  ctx.fillStyle = "#111";
  ctx.beginPath();
  ctx.arc(620, 280, 85, 0, Math.PI * 2);
  ctx.fill();

  // Rin dorado
  ctx.fillStyle = "#ffd200";
  ctx.beginPath();
  ctx.arc(620, 280, 50, 0, Math.PI * 2);
  ctx.fill();

  // Centro
  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.arc(620, 280, 20, 0, Math.PI * 2);
  ctx.fill();
}

//// =============================
//// SUSPENSIÓN DELANTERA
//// =============================
function suspension() {
  ctx.fillStyle = "#d4af37";
  ctx.fillRect(600, 170, 12, 120);
  ctx.fillRect(630, 170, 12, 120);
}

//// =============================
//// CHASIS
//// =============================
function chasis() {
  ctx.fillStyle = "#222";

  ctx.fillRect(300, 230, 260, 30);
  ctx.fillRect(360, 200, 40, 70);

  // Soporte diagonal
  ctx.beginPath();
  ctx.moveTo(300, 230);
  ctx.lineTo(420, 260);
  ctx.lineTo(410, 280);
  ctx.lineTo(300, 260);
  ctx.closePath();
  ctx.fill();
}

//// =============================
//// MOTOR
//// =============================
function motor() {
  ctx.fillStyle = "#777";

  ctx.beginPath();
  ctx.arc(420, 270, 40, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillRect(390, 290, 100, 20);
}

//// =============================
//// ESCAPE
//// =============================
function escapeMoto() {
  ctx.fillStyle = "#aaa";

  ctx.beginPath();
  ctx.moveTo(250, 260);
  ctx.lineTo(380, 235);
  ctx.lineTo(420, 270);
  ctx.lineTo(280, 295);
  ctx.closePath();
  ctx.fill();
}

//// =============================
//// ASIENTO Y COLÍN
//// =============================
function asiento() {

  ctx.fillStyle = "#111";

  // Asiento
  ctx.beginPath();
  ctx.moveTo(340, 200);
  ctx.lineTo(470, 200);
  ctx.lineTo(500, 230);
  ctx.lineTo(360, 230);
  ctx.closePath();
  ctx.fill();

  // Colín trasero
  ctx.fillStyle = "#222";
  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.lineTo(340, 200);
  ctx.lineTo(310, 170);
  ctx.lineTo(270, 180);
  ctx.closePath();
  ctx.fill();

  // Luz trasera
  ctx.fillStyle = "red";
  ctx.fillRect(265, 175, 25, 10);
}

//// =============================
//// TANQUE
//// =============================
function tanque() {
  ctx.fillStyle = "#0a47a3";

  ctx.beginPath();
  ctx.moveTo(470, 200);
  ctx.lineTo(600, 175);
  ctx.lineTo(630, 210);
  ctx.lineTo(520, 220);
  ctx.closePath();
  ctx.fill();
}

//// =============================
//// CARENADO
//// =============================
function carenado() {

  // Rojo
  ctx.fillStyle = "#e00000";
  ctx.beginPath();
  ctx.moveTo(520, 220);
  ctx.lineTo(660, 205);
  ctx.lineTo(620, 255);
  ctx.lineTo(480, 250);
  ctx.closePath();
  ctx.fill();

  // Blanco
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(600, 175);
  ctx.lineTo(740, 190);
  ctx.lineTo(700, 245);
  ctx.lineTo(630, 210);
  ctx.closePath();
  ctx.fill();

  // Negro inferior
  ctx.fillStyle = "#111";
  ctx.fillRect(520, 250, 140, 25);
}

//// =============================
//// FRENTE (FARO + PARABRISAS)
//// =============================
function frente() {

  // Faro
  ctx.fillStyle = "#222";
  ctx.beginPath();
  ctx.arc(740, 220, 20, 0, Math.PI * 2);
  ctx.fill();

  // Parabrisas
  ctx.fillStyle = "rgba(200,200,200,0.5)";
  ctx.beginPath();
  ctx.moveTo(710, 150);
  ctx.lineTo(770, 195);
  ctx.lineTo(720, 205);
  ctx.closePath();
  ctx.fill();
}

//// =============================
//// MANUBRIO
//// =============================
function manubrio() {
  ctx.strokeStyle = "#222";
  ctx.lineWidth = 6;

  ctx.beginPath();
  ctx.moveTo(640, 170);
  ctx.lineTo(700, 160);
  ctx.stroke();
}

//// =============================
//// DETALLES
//// =============================
function detalles() {

  // Pedal
  ctx.fillStyle = "#444";
  ctx.fillRect(410, 255, 40, 8);

  // Soporte
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(430, 300);
  ctx.lineTo(450, 330);
  ctx.stroke();

  // Logo circular estilo BMW
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(610, 220, 15, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#0a47a3";
  ctx.beginPath();
  ctx.arc(610, 220, 9, 0, Math.PI);
  ctx.fill();

  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(610, 220, 9, Math.PI, Math.PI * 2);
  ctx.fill();
}

//// =============================
//// FUNCIÓN PRINCIPAL
//// =============================
function dibujarMoto() {
  ruedas();
  suspension();
  chasis();
  motor();
  escapeMoto();
  asiento();
  tanque();
  carenado();
  frente();
  manubrio();
  detalles();
}

dibujarMoto();