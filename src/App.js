import React, { Component } from 'react'
import './App.css'
import Nav from './nav'
import Personal from './personal'
import './slick.css';
import './slick-theme.css';
import 'react-image-lightbox/style.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      personal: []
    }
  }

  render() {

    return (
      <div className='App'>
        <Personal type={'projects'}/>
        <Personal type={'personal'}/>
        <Nav />
      </div>
    )
  }
}

export default App
