import './style.css';
import {restEndPoint} from "./modules/refreshScore";
const tableScores = document.getElementById('table-generated')
window.addEventListener('load', () => {
  fetch(restEndPoint)
    .then((response) => response.json())
    .then() => {
    document.createElement("tr")
    tableScores.innerHTML =
    }})
