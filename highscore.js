/// Patrick Acheson

const highScoresList = document.querySelector('#table')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = highScores.map(score => {
    return `<div class="row"><div class="name">${score.name}</div><div class="score">${score.score}</div></div>`
}).join('')