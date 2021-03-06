//get canvas
import { cities } from './vuelosJSON.js';
import { path, totaldistance } from './main.js';

console.log(cities);
console.log(path, totaldistance);


// Elementos HTML
let canvas = document.getElementById('myCanvas');
let contextCanvas = canvas.getContext('2d');
// console.log(text);



// contextCanvas.fillStyle = 'rgb(0,0,0)';
// Dibujar las ciudades y darle sus nombres
cities.forEach(citie => {
    contextCanvas.beginPath();
    contextCanvas.arc(citie.x, citie.y, 5, 0, 2 * Math.PI);
    contextCanvas.fill();
    contextCanvas.font = '1.2rem Arial';
    contextCanvas.fillText(`${citie.citie}`, citie.x - 20, citie.y - 10);
    contextCanvas.closePath();
});




function drawLine(x1, y1, x2, y2) {
    contextCanvas.beginPath();
    contextCanvas.moveTo(x1, y1);
    contextCanvas.lineTo(x2, y2);
    contextCanvas.stroke();
    contextCanvas.closePath();
}



function getPoints() {
    for (let i = 0; i < path.length - 1; i += 1) {
        let x1, y1, x2, y2;
        for (let j = 0; j < cities.length; j += 1) {
            if (path[i] === cities[j].citie) {
                x1 = cities[j].x;
                y1 = cities[j].y;
            }
            if (path[i + 1] === cities[j].citie) {
                x2 = cities[j].x;
                y2 = cities[j].y;
            }
        }
        console.log(`x1 = ${x1}, y1 = ${y1} \n x2 = ${x2}, y2 = ${y2}`);
        drawLine(x1, y1, x2, y2);
    }
}
// drawLine(cities[0].x, cities[0].y, cities[1].x, cities[1].y);

getPoints();