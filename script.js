const score = document.getElementById('score');
const rolls = document.getElementById('rolls');
const wins = document.getElementById('wins');

const diceImage = document.getElementById('diceImage');

const rollDice = document.getElementById('rollDice');

let currentScore = 0
let currentRolls = 0
let currentWins = 0

const updateStats = () => {
    score.textContent = `Score: ${currentScore}`
    rolls.textContent = `Rolls: ${currentRolls}`
    wins.textContent = `Wins: ${currentWins}`
}

rollDice.addEventListener('click', () => {
    let randomNumber = Math.ceil(Math.random() * 6)
    diceImage.src = `./diceImages/dice${randomNumber}.png`

    if(randomNumber == 1){
        currentScore = 0
    }else{
        currentScore += randomNumber
    }

    if (currentScore >= 21){
        currentWins++
        currentScore = 0
        currentRolls = 0
    }
    currentRolls++
    updateStats()

});