import './variables'
const refresh = document.getElementById('refresh')
refresh.addEventListener('click',() => {
	fetch(restEndPoint).then(JSON.parse(promiseCallback()))
})