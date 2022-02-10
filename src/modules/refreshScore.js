import {result} from "lodash";

function fetchGame() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xHcNAgk6UkMi3fEdct8S/scores';
  fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach('result', (e) => {
          const tr =
        };})}
fetchGame()