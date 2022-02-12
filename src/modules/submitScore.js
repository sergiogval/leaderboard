const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xHcNAgk6UkMi3fEdct8S/scores';
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
class Data {
  constructor(user, score) {
    this.user = userName.value,
    this.score = userName.value;
  }
}

const config = {
  method: 'POST',
  headers: {
    'Access-Control-Allow-Origin': 'origin',
    'Content-Type': 'application/json',
  },
};

export function postMessage(Data) {
  fetch(API_URL, config)
    .then(userName.value = '')
    .then(userScore.value = '');
}
