const username = document.querySelector('#username');
const saveBtn = document.querySelector('.save-btn');
const finalScore = localStorage.getItem('newScore') || 0;

let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

username.addEventListener('keyup', () => {
    saveBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: finalScore,
        name: username.value,
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5); // Keep top 5 scores

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = '/cyber-quiz-w-js/leaderboard.html';
};

saveBtn.addEventListener('click', saveHighScore);
