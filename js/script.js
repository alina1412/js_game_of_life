import Life from './life.mjs'; 

let canvas = document.getElementById("canvas001");
let life = new Life(canvas);
window.life = life;
canvas.onclick = (e) => life.canvas_clicked(e);

let btnStart = document.getElementById("btn_start_animation")
btnStart.onclick = () => life.animation_start();

let btnStop = document.getElementById("btn_stop_animation")
btnStop.onclick = () => life.animation_stop();

let btnClear = document.getElementById("btn_clear_grid")
btnClear.onclick = () => life.clear_grid();

let btnRandomize= document.getElementById("btn_randomize_grid")
btnRandomize.onclick = () => life.randomize_grid();
