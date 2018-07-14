import React, { Component } from 'react'
import './App.css'
import Nav from './nav'
import Personal from './personal'
import './slick.css';
import './slick-theme.css';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

setConfiguration({
  breakpoints: [750, 1250, 2000, 2000],
  containerWidths: [1250, 2000, 2000, 2000],
  gridColumns: 12,
  gutterWidth: [10, 20, 20, 20]
});

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

      <Container className='App'>
      <ReactCSSTransitionGroup
      transitionName="load"
      transitionAppear={true}
      transitionAppearTimeout={5000}>
        <Row >
          <Col xs ={12} sm={0} md={1}>
            <Hidden md> </Hidden>
            <Hidden lg><Nav /></Hidden>
          </Col>
            <Col xs ={12} sm={6} md={5}>
            <ReactCSSTransitionGroup
            transitionName="load"
            transitionAppear={true}
            transitionAppearTimeout={5000}>
              <Personal type={'projects'}/>
            </ReactCSSTransitionGroup>
            </Col>
            <Col xs ={12} sm={6} md={5}>
              <ReactCSSTransitionGroup
            transitionName="load"
            transitionAppear={true}
            transitionAppearTimeout={5000}>
              <Personal type={'personal'}/>
              </ReactCSSTransitionGroup>
            </Col>
          <Col xs ={12} sm={0} md={1}>
          </Col>
        </Row>
        </ReactCSSTransitionGroup>
      </Container>

    )
  }
}

export default App
