import axios from 'axios'

export function fetchRandomCat(callback) {
  // TODO - fetch json from the http://aws.random.cat/meow or a similar random cat API
  const apiURL = 'http://aws.random.cat/meow'
  axios.get(apiURL)
    .then(res => {
      const catURLImage = res.data.file
      callback(null, catURLImage)
    })
    .catch(error => {
      console.log(error)
      callback(error, null);
    })
}