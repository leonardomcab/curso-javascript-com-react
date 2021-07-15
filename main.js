import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import BoardGame from './src/objects/BoardGame'

const $root = document.querySelector('#root') // $ = toda variável com $ guarda um elemento da tela.
const $htmlBoardGame = BoardGame(6) // aqui se configura quantas cartas se quer ter no jogo

$root.insertAdjacentHTML("beforeend", $htmlBoardGame) // específico da API DOM
// componente deve ser isolado para ser reutilizado outras vezes.