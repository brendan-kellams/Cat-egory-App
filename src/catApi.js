import axios from 'axios'

export function fetchRandomCat(res) {
  // TODO - fetch json from the http://aws.random.cat/meow or a similar random cat API
  axios.get(`http://aws.random.cat/meow`)
    .then(res => res.json())
  console.log(res);
  throw new Error("not implemented")
}