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
    childVisible: false,
    hide: true
  };

  componentDidMount() {
    let personalURL = 'http://localhost:8888/wp-json/wp/v2/' + this.props.type
    fetch(personalURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          personal: response,
          images: this.getImageNames(response),
          hide: false
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

    const renderPersonalCat = () => {
      const { personal, active } = this.state;
      const info  = personal[active - 1];

      if (info && info.acf && info.acf.info ) {
        const title = info.acf.info
         if (info.acf.url) {
           return <a href={info.acf.url} target="_blank">{info.acf.info}</a>
         } else {
           return title;
         }
      }
    }

    let personalcap = <span>{this.state.personal[this.state.active - 1] && this.state.personal[this.state.active - 1].title.rendered}</span>

    let personalcat = <span>{this.state.personal[this.state.active - 1] && this.state.personal[this.state.active - 1].acf.info}</span>

    let personaltitle = <span>{this.state.personal[this.state.active - 1] && this.state.personal[this.state.active - 1].content.rendered}</span>

    let personaltotal = personal.length;

    const settings = {
      beforeChange: (current, next) =>
      this.setState({
        active: (next + 1),
      }),
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: false
    };

    const { images, current  } = this.state;

    if(this.state.hide) {
      return null
    } else {
      return (
        <ReactCSSTransitionGroup
          transitionName="load"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={2500}
          // mountOnEnter={true}
          transitionLeave={false}>
        <div className='personal'>
          <Slider {...settings} ref={slider => (this.slider = slider)}>
            {personal}
          </Slider>
          <div className='personalcap'>
            <p>{personalcap}</p>
            <p><span className='number'>({this.state.active}/{personaltotal})</span>
            <span className='title'>{renderPersonalCat()}</span></p>
          </div>
        </div>
        </ReactCSSTransitionGroup>
      );
    }
  }
}

export default Personal
