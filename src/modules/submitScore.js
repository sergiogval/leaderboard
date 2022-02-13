const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xHcNAgk6UkMi3fEdct8S/scores';
const postMessage = async () => {
  const UserName = document.getElementById('userName').value;
  const UserScore = document.getElementById('userScore').value;
  const config = {
    headers: {
      method: 'POST',
      'Access-Control-Allow-Origin': 'origin',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  await fetch(API_URL, config, (JSON.stringify({
    user: UserName,
    score: parseInt(UserScore, 10),
  })));
};

export { postMessage, API_URL };