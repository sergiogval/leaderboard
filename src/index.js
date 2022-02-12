const API_URL =  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xHcNAgk6UkMi3fEdct8S/scores";

const getData =  ()=>{
  const response = fetch(API_URL, config);
  let data = response.json(display);
  display(data);
  console.log(data);
  console.log(data.result[0]);

};

getData();


const displayContainer = document.querySelector('.table_item');
let feed = '';

const display = (data) => {

for(let i = 0; i <data.result.length; i++) {
feed +=  `<tr><td>${data.result[i].user}</td><td>${data.result[i].score}</td></tr>`

}

displayContainer.innerHTML = feed;

}