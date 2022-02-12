const API_URL =  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xHcNAgk6UkMi3fEdct8S/scores";

function postMessage(data) {
  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(API_URL, config)
  .then((r) => r.json())
  .then((data) => {
    console.log(data)
  })
  const data = {
    user: userName.value,
    score: userScore.value
  }
  postMessage(data)
  userName.value = ''
  userScore.value = ''
  window.location.reload()
}
// end of submitScore function
const setScore = document.getElementById('submit').addEventListener('click', postMessage)