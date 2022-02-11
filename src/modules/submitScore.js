import { API_ID, API_URL, API_SERVICE } from "./variables";
const form = document.querySelector('.form');
const [ userName, score ] = form.elements;

class InputEvent {
  static json;
  constructor( )  {
    this.userName = form.userName
    this.score = form.score
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('API_URL + API_ID + API_SERVICE') {
  postMessage(InputEvent.json)
  userName.value = ''
  score.value = ''
  })




