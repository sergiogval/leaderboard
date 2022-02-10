export const restEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xHcNAgk6UkMi3fEdct8S/scores'
export const refresh = document.getElementById('refresh')
refresh.addEventListener('click', () => {
	fetch(restEndPoint)
		.then((response) => response.json())
		})