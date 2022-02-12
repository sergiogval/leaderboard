import './style.css';
import { postMessage } from './modules/submitScore';

const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xHcNAgk6UkMi3fEdct8S/scores';

function getScores() {
  const displayContent = document.getElementById('table_item');
  const scoreList = document.createElement('div');
  const config = {
    headers: {
      'Access-Control-Allow-Origin': origin,
      Accept: 'application/json',
    },
  };
  fetch(API_URL, config)
      .then((result) => result.json())
      .then((data) => {
        for (let i = 0; i <= data.length; i += 1) {
          scoreList.innerHTML = `
        <div>${data[i].user}<div>`;
        }
        displayContent.appendChild(scoreList);
      });
}
getScores()

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getScores();
});

const newScore = document.getElementById('submit');
newScore.addEventListener('click', (e) => {
  e.preventDefault();
  postMessage();
});