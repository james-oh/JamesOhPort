import React, { Component } from 'react'
import './App.css'
import Slider from "react-slick"
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

setConfiguration({
  breakpoints: [750, 1250, 2000, 2000],
  containerWidths: [1250, 2000, 2000, 2000],
  gridColumns: 12,
  gutterWidth: [10, 20, 20, 20]
});



class Personal extends Component {
  state = {
    active: 1,
    personal: [],
    images: [],
    current: -1,
    childVisible: false
  };

  componentDidMount() {
    let personalURL = 'http://localhost:8888/wp-json/wp/v2/' + this.props.type
    fetch(personalURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          personal: response,
          images: this.getImageNames(response)
        })
      })
  }

  getImageNames(payload) {
    return payload.map(personal => personal.better_featured_image.source_url)
  }

  render() {
    let personal = this.state.personal.map((personal, index) => {
      return (
        <div key={index}>
          <img key={index} src={personal.better_featured_image.source_url}
            alt={personal.better_featured_image.alt_text} />
        </div>
      )
    })

    let personalcap = <span>{this.state.personal[this.state.active - 1] && this.state.personal[this.state.active - 1].title.rendered}</span>

    let personalcat = <span>{this.state.personal[this.state.active - 1] && this.state.personal[this.state.active - 1].acf.info}</span>

    let personaltotal = personal.length;

    const settings = {
      beforeChange: (current, next) =>
      this.setState({
        active: (next + 1),
      }),
      afterChange: (index) => {
        if (this.slidermodal) {
          this.slidermodal.slickGoTo(index)
        }
      },
      dots: false,
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: false
    };

    const settingsmodal = {
      beforeChange: (current, next) =>
      this.setState({
        active: (next + 1),
      }),
      afterChange: (index) => {
        this.slider.slickGoTo(index)
      },
      initialSlide: this.state.active - 1,
      dots: false,
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: false
    };
    const { images, current  } = this.state;
    return (
      <div className='personal'>
        <Slider {...settings} ref={slider => (this.slider = slider)}>
          {personal}
        </Slider>
        <div className='personalcap'>
          <p><span className='number'>{personalcat}</span></p>
          <p><span className='number'>({this.state.active}/{personaltotal})</span>
          <a onClick={() => this.enter()}>{personalcap}</a><a onClick={() => this.enter()} className='zoom'>+</a></p>
        </div>
        {
          this.state.childVisible
          ? <div className='modal'>
            <ReactCSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={100}
            transitionEnter={false}
            transitionLeave={false}>
              <Container className='modalwrap'>
                <Row  ug>
                  <Col xs ={12} sm={0} md={1}>
                    <div className='back'>
                      <a onClick={() => this.setState({childVisible: false})}>BACK</a>
                    </div>
                  </Col>
                  <Col xs ={12} sm={12} md={10}>
                    <div className='modalslider'>
                    <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={100}
                    transitionEnter={false}
                    transitionLeave={false}>
                      <Slider {...settingsmodal} ref={slider => (this.slidermodal = slider)}>
                        {personal}
                      </Slider>
                      </ReactCSSTransitionGroup>
                      <div className='modalnav'>
                        <p><span className='number'>{personalcat}</span></p>
                        <p><span className='number'>({this.state.active}/{personaltotal})
                        </span><a>{personalcap}</a></p>
                      </div>
                      <div className='topborder'>
                      </div>
                    </div>
                  </Col>
                  <Col xs ={12} sm={0} md={1}>
                  </Col>
                </Row>
              </Container>
              </ReactCSSTransitionGroup>
            </div>
          : null
        }
      </div>

    );
  }

  enter() {
    this.setState({ childVisible: true });
    console.log('b');
  }
}

export default Personal
