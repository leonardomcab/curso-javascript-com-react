/* Aqui entra a função que vai mostrar a imagem
da frente e a imagem do verso dos cartões */

import CardGame from "../CardGame"

function CardFrontBack() {
    return /*html*/ `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("javascript", "Logo do Javascript")} 
        </article>
    `
}
/* passagem de parâmetro como argumento
para dentro da função do Objeto CardGame */

export default CardFrontBack