import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import FoxSVG from '../components/img/whiteFoxes.svg'

class Example extends React.Component {
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <div className="nav-burger">
            <Menu right width='100%'>
                <img src={FoxSVG} alt="theWhiteFox Logo" />
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/">Blog</a>
            </Menu>
        </div>
    )
  }
}

export default Example