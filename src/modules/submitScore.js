const form = document.querySelector('.form');
const [ userName, score ] = form.elements;
const addScore = document.getElementById('submit');

class inputEvent {
  constructor( )  {
    this.userName = form.userName
    this.score = form.score
  }
}
let scores = [];



userName.addEventListener('change', () => {
  inputEvent.userName = userName.value;
});

score.addEventListener('change', () => {
  inputEvent.score = score.value;
});

form.addEventListener('submit', () => {
  postMessage(InputEvent)
})




