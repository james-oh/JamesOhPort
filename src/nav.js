import React, { Component } from 'react'
import './App.css'

class Nav extends Component {



  render () {
      return (
          <div>
              <div className='nav'>
                  <div className='name'><a>James Oh</a></div>
                  <div className='time'><p>Montreal: <span>10:45pm, </span><span>17 degrees</span></p></div>
                </div>
            </div>
        )
    }
}

export default Nav
