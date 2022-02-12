const API_URL =  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xHcNAgk6UkMi3fEdct8S/scores";

const refresh = document.getElementById('refresh')
refresh.addEventListener('click', getScores)

getScores()

function getScores() {
	const config = {
		headers: {
			'Accept': 'application/json'},
	}
fetch(restEndPoint, config)
		.then((r) => r.json())
		.then((data) => {
			console.log(data)
		})
}