import React, { Component } from 'react'
import './App.css'
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Nav extends Component {
  state = {
    navVisible: false
  };

  render () {
      return (
          <div>
              <div className='nav'>
                <div className='name'><a onClick={() => this.info()}>James Oh</a></div>

              </div>
              {
                this.state.navVisible
                ? <div className='modal'>
                    <Container className='modalwrap'>
                      <Row >
                        <Col xs ={12} sm={0} md={1}>
                          <div className='back'>
                            <a onClick={() => this.setState({navVisible: false})}>BACK</a>
                          </div>
                        </Col>
                        <Col xs ={12} sm={5} md={4}>
                          <div className="infoWrap">
                          <ReactCSSTransitionGroup
                          transitionName="f1"
                          transitionAppear={true}
                          transitionAppearTimeout={500}
                          transitionEnter={false}
                          transitionLeave={false}>
                          <p className="infoText">
                          JAMES OH is a Graphic Designer operating in the arts and culture sectors.
                          <br /><br />
                          </p>
                          </ReactCSSTransitionGroup>
                          <ReactCSSTransitionGroup
                          transitionName="f2"
                          transitionAppear={true}
                          transitionAppearTimeout={1000}
                          transitionEnter={false}
                          transitionLeave={false}>
                          <p className="infoText">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum convallis enim venenatis tempus. Nunc elementum semper mollis. Nunc eu dolor non libero blandit convallis. Sed aliquam lorem ligula, porttitor tincidunt dolor hendrerit vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                          <br /><br />
                          </p>
                          </ReactCSSTransitionGroup>
                          <ReactCSSTransitionGroup
                          transitionName="f3"
                          transitionAppear={true}
                          transitionAppearTimeout={1500}
                          transitionEnter={false}
                          transitionLeave={false}>
                          <p className="infoText">
                          Sed in urna nec elit dictum volutpat. Nullam velit ante, lobortis vitae urna vitae, bibendum eleifend lectus. Vestibulum eget tincidunt sem, vel placerat felis. Suspendisse aliquam justo in sem finibus lobortis.
                          </p>
                          </ReactCSSTransitionGroup>
                          </div>

                          <ReactCSSTransitionGroup
                          transitionName="f4"
                          transitionAppear={true}
                          transitionAppearTimeout={2000}
                          transitionEnter={false}
                          transitionLeave={false}>
                          <div className='infoNav'>
                            <p><span className='number'>+ 514 578 5249</span></p>
                            <a>contact@jamesoh.info</a>
                          </div>
                          </ReactCSSTransitionGroup>
                        </Col>
                        <Col xs ={12} sm={7} md={6}>
                        </Col>
                        <Col xs ={12} sm={0} md={1}>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                : null
              }
          </div>
        )
    }

  info() {
    this.setState({ navVisible: true });
  }
}

export default Nav
