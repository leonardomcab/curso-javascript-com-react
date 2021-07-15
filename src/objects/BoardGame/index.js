import CardGame from "../../components/CardGame"

function BoardGame(amountCards) { // mostra o numero de cartas na tela
    const $htmlCardGame = CardGame()
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards)

    console.log($htmlBoardGame)
        
    return $htmlBoardGame
}

export default BoardGame