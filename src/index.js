import './style.css';
import {fetchGame } from "./modules/refreshScore";
BASE_URL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api";


document.addEventListener("DOMContentLoaded", () => {
  fetchGame();
});

if (localStorage.Scores.length !== fetchGame.length) {
  scores = JSON.parse(localStorage.getItem('savedScores'));
  }