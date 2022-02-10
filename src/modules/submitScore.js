import _ from "lodash/seq";
import BASE_URL from './refreshScore'
const form = document.querySelector('.form');
const [ userName, score ] = form.elements;
const addScore = document.getElementById('submit');

const inputScore = {};
let scores = [];



userName.addEventListener('change', () => {
  inputScore.userName = userName.value;
});

score.addEventListener('change', () => {
  inputScore.score = score.value;
});

form.addEventListener('submit', (e) => {



})
class Score {
  constructor(userName, score) {
    this.userName = userName
    this.score = score
  }
}

addScore.addEventListener('submit', (e) => {
  e.preventDefault()
  const newScore = new Score
  localStorage.setItem('savedScores', JSON.stringify(newScore));
    }
)
const populateFields = () => {
};