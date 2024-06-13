import kaboom from "kaboom";

export const k = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById('game'),
    background: [49, 16, 71],
    debug: false,
});