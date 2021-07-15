import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import ScoreBoard from './src/objects/ScoreBoard'
import BoardGame from './src/objects/BoardGame'

const $root = document.querySelector('#root') // $ = toda variável com $ guarda um elemento da tela.

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${ScoreBoard()}   
        ${BoardGame(2)}    
    `)  // insertAdjacentHTML = específico da API DOM
        // componente deve ser isolado para ser reutilizado outras vezes.
        // BoardGame(6) -> o '6' é o parâmetro onde se configura quantas cartas quer ter no jogo