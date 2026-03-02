/**
 * ============================================================
 * Aplicación: Dibujo de Moto Deportiva BMW en Canvas 2D
 * Autor: Juan Pablo Hernández
 * Materia: Graficación por Computadora
 * Descripción:
 * Dibuja una moto deportiva usando más de 30 figuras básicas
 * mediante la API Canvas 2D de JavaScript.
 * ============================================================
 */

const canvas = document.getElementById("motoCanvas");
const ctx = canvas.getContext("2d");

//// =============================
//// FUNCIONES DE DIBUJO
//// =============================

/* ---------- RUEDAS ---------- */
function dibujarRuedas() {

  // Rueda trasera
  ctx.fillStyle = "#111";
  ctx.beginPath();
  ctx.arc(200, 280, 80, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#bbb";
  ctx.beginPath();
  ctx.arc(200, 280, 45, 0, Math.PI * 2);
  ctx.fill();

  // Rueda delantera
  ctx.fillStyle = "#111";
  ctx.beginPath();
  ctx.arc(620, 280, 80, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffd200";
  ctx.beginPath();
  ctx.arc(620, 280, 45, 0, Math.PI * 2);
  ctx.fill();
}

/* ---------- SUSPENSIÓN ---------- */
function dibujarSuspension() {
  ctx.fillStyle = "#d4af37";
  ctx.fillRect(600, 170, 10, 110);
  ctx.fillRect(630, 170, 10, 110);
}

/* ---------- CHASIS ---------- */
function dibujarChasis() {
  ctx.fillStyle = "#222";
  ctx.fillRect(300, 230, 260, 30);
  ctx.fillRect(360, 200, 40, 70);
}

/* ---------- MOTOR ---------- */
function dibujarMotor() {
  ctx.fillStyle = "#777";

  ctx.beginPath();
  ctx.arc(420, 270, 35, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillRect(390, 280, 90, 20);
}

/* ---------- ESCAPE ---------- */
function dibujarEscape() {
  ctx.fillStyle = "#aaa";

  ctx.beginPath();
  ctx.moveTo(260, 260);
  ctx.lineTo(380, 240);
  ctx.lineTo(400, 270);
  ctx.lineTo(280, 290);
  ctx.closePath();
  ctx.fill();
}

/* ---------- ASIENTO ---------- */
function dibujarAsiento() {
  ctx.fillStyle = "#111";

  ctx.beginPath();
  ctx.moveTo(340, 200);
  ctx.lineTo(470, 200);
  ctx.lineTo(500, 230);
  ctx.lineTo(360, 230);
  ctx.closePath();
  ctx.fill();
}

/* ---------- TANQUE ---------- */
function dibujarTanque() {
  ctx.fillStyle = "#0a47a3";

  ctx.beginPath();
  ctx.moveTo(470, 200);
  ctx.lineTo(600, 180);
  ctx.lineTo(620, 210);
  ctx.lineTo(520, 220);
  ctx.closePath();
  ctx.fill();
}

/* ---------- CARENADO ---------- */
function dibujarCarenado() {

  // Rojo
  ctx.fillStyle = "#e00000";
  ctx.beginPath();
  ctx.moveTo(520, 220);
  ctx.lineTo(640, 210);
  ctx.lineTo(610, 250);
  ctx.lineTo(480, 250);
  ctx.closePath();
  ctx.fill();

  // Blanco
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(600, 180);
  ctx.lineTo(720, 190);
  ctx.lineTo(690, 240);
  ctx.lineTo(620, 210);
  ctx.closePath();
  ctx.fill();
}

/* ---------- FRENTE ---------- */
function dibujarFrente() {

  // Faro
  ctx.fillStyle = "#222";
  ctx.beginPath();
  ctx.arc(730, 215, 18, 0, Math.PI * 2);
  ctx.fill();

  // Parabrisas
  ctx.fillStyle = "rgba(200,200,200,0.5)";
  ctx.beginPath();
  ctx.moveTo(700, 160);
  ctx.lineTo(760, 200);
  ctx.lineTo(720, 210);
  ctx.closePath();
  ctx.fill();
}

/* ---------- DETALLES ---------- */
function dibujarDetalles() {

  // Pedal
  ctx.fillStyle = "#444";
  ctx.fillRect(410, 250, 40, 8);

  // Soporte
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(430, 300);
  ctx.lineTo(450, 330);
  ctx.stroke();
}

/* ---------- FUNCIÓN PRINCIPAL ---------- */
function dibujarMoto() {
  dibujarRuedas();
  dibujarSuspension();
  dibujarChasis();
  dibujarMotor();
  dibujarEscape();
  dibujarAsiento();
  dibujarTanque();
  dibujarCarenado();
  dibujarFrente();
  dibujarDetalles();
}

// Ejecutar dibujo
dibujarMoto();