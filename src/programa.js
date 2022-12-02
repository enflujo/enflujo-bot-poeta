import './scss/estilos.scss';

import { titulos, frases } from './textos';

let indicesElegidos = [];

const poema1 = document.getElementById('poema1');
const titulo1 = document.getElementById('titulo1');
const boton = document.getElementById('boton');

function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function generarVerso() {
  const random = numeroRandom(0, frases.length - 1);

  if (!indicesElegidos.includes(random)) {
    indicesElegidos.push(random);
    if (frases[random]) {
      return frases[random];
    }
  } else {
    return frases[0];
  }
}

function generarPoema() {
  indicesElegidos = [];
  const indiceTitulo = numeroRandom(0, titulos.length);

  const verso1 = generarVerso();
  const verso2 = generarVerso();
  const verso3 = generarVerso();
  const verso4 = generarVerso();

  poema1.innerText = verso1 + '\n' + verso2 + '\n' + verso3 + '\n' + verso4 + '.';
  titulo1.innerText = titulos[indiceTitulo] ? titulos[indiceTitulo] : 'Sin título';
}

boton.addEventListener('click', function () {
  generarPoema();
});

generarPoema();
