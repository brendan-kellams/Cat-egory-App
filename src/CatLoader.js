import React from 'react'
// import { fetchRandomCat } from './catApi'
import axios from 'axios'


export class CatLoader extends React.Component {
  state = {
    cat: 
  }
  componentDidMount() {
    return axios.get(`http://aws.random.cat/meow`)
      .then(res => {
        return res.data
      })
    console.log();
    throw new Error("not implemented")
  }
  // TODO, fetchRandomCat
  render() {
    return <div>TODO - load a cat image from the cat api</div>
  }
}