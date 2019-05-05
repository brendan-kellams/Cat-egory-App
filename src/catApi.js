import axios from 'axios'

export function fetchRandomCat() {
  // TODO - fetch json from the http://aws.random.cat/meow or a similar random cat API
  return axios.get(`http://aws.random.cat/meow`)
    .then(res => {
      return res.data
    })
  console.log();
  throw new Error("not implemented")
}