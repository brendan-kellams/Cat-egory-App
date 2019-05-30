import React from 'react'
import { fetchRandomCat } from './catApi'



export class CatLoader extends React.Component {
  state = {
    catURL: ''
  }
  componentDidMount() {
    fetchRandomCat((error, APIURL) => {
      if (!error) {
        this.setState({ catURL: APIURL })
      } else {
        console.log('no cats to play with')
      }
    })
  }
  // TODO, fetchRandomCat
  render() {
    return <div>
      <img src={this.state.catURL} alt='cat' />
    </div>
  }
}