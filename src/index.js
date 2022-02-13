import './style.css';
import { postMessage, API_URL } from './modules/submitScore';

const getScores = () => {
  const displayContent = document.getElementById('table_item');
  const scoreList = document.createElement('li');
  const config = {
    headers: {
      'Access-Control-Allow-Origin': origin,
      Accept: 'application/json',
    },
  };
  fetch(API_URL, config)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.result.length; i += 1) {
        scoreList.textContent = `
    ${data.result[i].user}
    ${data.result[i].score}`;
        displayContent.append(scoreList);
      }
    });
};

getScores();

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  getScores();
});

const newScore = document.getElementById('submitScore');
newScore.addEventListener('submit', (e) => {
  e.preventDefault();
  postMessage()
    .then((r) => r.json());
});
