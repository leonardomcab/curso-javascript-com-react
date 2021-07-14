import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import CardGame from './src/components/CardGame'

const $root = document.querySelector('#root') // $ = toda variável com $ guarda um elemento da tela.
const $htmlCardGame = CardGame() + CardGame() // string que representa o HTML do projeto


$root.insertAdjacentHTML("beforeend", $htmlCardGame) // específico da API DOM
// componente deve ser isolado para ser reutilizado outras vezes.