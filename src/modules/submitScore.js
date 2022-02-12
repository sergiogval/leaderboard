const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xHcNAgk6UkMi3fEdct8S/scores';
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');

class Data {
  'user':"userName.value"

  'score': "userName.value"
}

function postMessage() {
  const config = {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'origin',
      'Content-Type': 'application/json',
    },
  };
  fetch(API_URL, config);
  userName.value = '';
  userScore.value = '';
}
postMessage(Data);