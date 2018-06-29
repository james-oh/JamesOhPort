import React, { Component } from 'react'
import './App.css'
import Slider from "react-slick"
import Lightbox from 'react-image-lightbox'

class Personal extends Component {
  state = {
    active: 1,
    personal: [],
    images: [],
    current: -1
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

  handleClickImage = (e, image) => {
    e && e.preventDefault();

    this.setState({
      current: this.state.active - 1
    })
  }

  handleCloseModal = (e) => {
    this.setState({
      current: -1
    })
  }

  clampIndex(min, index, max) {
    if (index < min) return max;
    if (max <= index) return min;
    return index;
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

    let personaltotal = personal.length;


    const settings = {
      beforeChange: (current, next) =>
      this.setState({
        active: (next + 1),
      }),
      dots: false,
      infinite: true,
      speed: 0,
      lazyload: true,
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
        <div onClick={e => this.handleClickImage(e)} className='personalcap'><span className='number'>({this.state.active}/{personaltotal})</span><a>{personalcap}</a><span className='zoom'><a>+</a></span></div>
        {this.state.current >= 0 &&
         <Lightbox
            mainSrc={images[this.state.current]}
            prevSrc={images[this.clampIndex(0, current - 1, images.length)]}
            nextSrc={images[this.clampIndex(0, current + 1, images.length)]}
            onCloseRequest={this.handleCloseModal}
            onMovePrevRequest={() => {
              const newIndex = this.clampIndex(0, current - 1, images.length);
              this.setState({
                current: newIndex,
                active: newIndex + 1
              });
              this.slider.slickGoTo(newIndex)
            }}
            onMoveNextRequest={() => {
              const newIndex = this.clampIndex(0, current + 1, images.length);
              this.setState({
                current: newIndex,
                active: newIndex + 1
              });
              this.slider.slickGoTo(newIndex)
            }}
            />
        }
      </div>
    );
  }
}

export default Personal
