const form = document.querySelector('.form');
const [ userName, score ] = form.elements;

class inputEvent {
  constructor( )  {
    this.userName = form.userName
    this.score = form.score
  }
}

userName.addEventListener('change', () => {
  inputEvent.userName = userName.value;
});

score.addEventListener('change', () => {
  inputEvent.score = score.value;
});

form.addEventListener('submit', () => {
  postMessage(JSON.parse(inputEvent))
  userName.value = ''
  score.value = ''
})




