/* Aqui entra a função que vai mostrar a imagem
da frente e a imagem do verso dos cartões */

import CardGame from "../CardGame"
import './style.css'

function CardFrontBack() {
    return /*html*/ `
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("javascript", "Logo do Javascript")} 
            </div>
        </article>
    `
}
/* passagem de parâmetro como argumento
para dentro da função do Objeto CardGame */

export default CardFrontBack