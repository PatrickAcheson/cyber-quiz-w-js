/// Patrick Acheson

const highScoresList = document.querySelector('#highscorelist')
const highScore = JSON.parse(localStorage.getItem('highScore')) || []

highScoresList.innerHTML = highScore.map(score => {
    return '<li class="score">${score.name} - ${score.score} </li>'
}).join('')