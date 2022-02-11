import './modules/variables'



window.addEventListener('load', () => {
  fetch(restEndPoint).result = JSON.parse(promiseCallback(result).then(loadScores()))
})


async function loadScores(data) {
  const tableScores = document.getElementById('table-generated')
  await Promise.all([fetch(score)])
  JSON.parse(data).innerHTML = `
    <tr>${data}</tr>`
  tableScores.appendChild('data')
}

