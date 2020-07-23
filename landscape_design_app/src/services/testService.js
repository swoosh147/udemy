const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=ZlBkRy8renVwb1YyVW10SXk3R3k4UT09&page=2');
  const json = await response.json();
  console.log(json);
})();