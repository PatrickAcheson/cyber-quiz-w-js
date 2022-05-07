const username = document.querySelector('#username')
const savebtn = document.querySelector('#save-btn')
const score = document.querySelector('#score')
const newScore = document.querySelector('#newScore')

const highScore = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_SCORE = 35

score.innertext = newScore

username.addEventListener('keyup', () => {
    savebtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()
    console.log(username)
    const score = {
        score: newScore,
        name: username.value
    }

    highScore.push(score)

    highScore.sort((a,b) => {
        return b.score - a.score
    })
}
highScore.splice(5)

localStorage.setItem('highScores', JSON.stringify(highScore))
console.log(highScore)
window.location.assign('/')