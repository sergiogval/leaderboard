import {promiseCallback} from "async/internal/promiseCallback";

export const restEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xHcNAgk6UkMi3fEdct8S/scores'
const refresh = document.getElementById('refresh')
refresh.addEventListener('click',() => {
	fetch(restEndPoint).then(JSON.parse(promiseCallback()))
})