export const  BASE_URL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api";
export function fetchGame() {
  const url = `${BASE_URL}/games/Zl4d7IVkemOTTVg2fUdz/scores`;
  fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
}

