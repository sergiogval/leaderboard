import './style.css';
import {fetchGame } from "./modules/refreshScore";
const tableGenerated = document.querySelector('table-generated')

document.addEventListener("DOMContentLoaded", () => {
  e.preventDefault()
  fetchGame();
  tableGenerated.forEach(('elem' in ) {

  }

});

if (localStorage.Scores.length !== fetchGame.length) {
  scores = JSON.parse(localStorage.getItem('savedScores'));
  }