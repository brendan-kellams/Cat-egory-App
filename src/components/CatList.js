import React from 'react'


export class CatList extends React.Component {
  state = {
    catImages: []
  }

  componentDidMount() {
    const urlArray = ['https://purr.objects-us-east-1.dream.io/i/iphone2015006.jpg', 'https://purr.objects-us-east-1.dream.io/i/iphone2015006.jpg', 'https://purr.objects-us-east-1.dream.io/i/iphone2015006.jpg']
    const catImages = urlArray.map((catImage) => {
      return `<img  src=${catImage} alt='cat'/>`
    })
    this.setState({ catImages: catImages })
  }
  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.state.catImages }}>
    </div>
  }
}