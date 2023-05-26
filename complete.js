const username = document.querySelector('#username')
const savebtn = document.querySelector('#save-btn')
const score = localStorage.getItem('newScore') || 0 // Get score from localStorage

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

username.addEventListener('keyup', () => {
    savebtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: score,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })
    highScores.splice(5) // Keep top 5 scores

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/cyber-quiz-w-js/leaderboard.html')
}

savebtn.addEventListener('click', saveHighScore)