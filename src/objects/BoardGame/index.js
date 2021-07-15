import './styles.css'
import CardGame from "../../components/CardGame"

function BoardGame(amountCards) { // mostra o numero de cartas na tela
    const $htmlCardGame = CardGame()
    const $htmlContent = $htmlCardGame.repeat(amountCards)

    return /* html */ `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `
}

export default BoardGame