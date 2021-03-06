// Importo los vuelos
import { vuelos } from './vuelosJSON.js';
console.table(vuelos);

let text = document.querySelector('.hero__fly');
// console.log(text);


let originCity = 'Nueva York',
    destinyCity = 'LA';
export let path = [];
export let totaldistance = 0;

// console.log(originCity, destinyCity);

// get fly options
function getOptions() {
    let options = [];
    for (let i = 0; i < vuelos.length - 1; i += 1) {
        if (path.length === 0) {
            if (originCity === vuelos[i].origen) {
                options.push(vuelos[i])
            }
        } else {
            if (path[path.length - 1] === vuelos[i].origen) {
                options.push(vuelos[i])
            }

        }
    }

    return options;
}

function getDecision(options) {
    let randomFly = 0,
        randomDecision;
    randomFly = Math.floor(Math.random() * options.length);
    randomDecision = options[randomFly];
    return randomDecision;

}

function takeFly() {
    let decision;
    if (getOptions().length === 0) {
        text.innerHTML = `Te has quedado estancado no hay vuelos pasa salir de ${path[path.length-1]}`
        return 0;
    } else {
        decision = getDecision(getOptions());
        console.log(decision);
        path.push(decision.origen, decision.destino);
        totaldistance += decision.distancia;
    }


    if (path[path.length - 1] === destinyCity) {
        // filtrar el camino, para quitar duplicados y pulirlo en al salida
        let pathfilter = path.filter((item, index) => {
            return path.indexOf(item) === index;
        })
        text.innerHTML = `El recorrido ha sido de ${pathfilter.join(' hacia ')} \n con una distancia total recorrida de ${totaldistance} millas`;
    } else {
        takeFly();
    }
}


takeFly();