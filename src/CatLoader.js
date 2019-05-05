import React from 'react'
import { fetchRandomCat } from './catApi'

export class CatLoader extends React.Component {

  componentDidMount() {
    fetchRandomCat()
  }
  // TODO, fetchRandomCat
  render() {
    return <div>TODO - load a cat image from the cat api</div>
  }
}