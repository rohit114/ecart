import React, { Component } from 'react'
import GoogleAuth from './GoogleAuth';
import  '../assets/style1.css'
export default class NavBar extends Component {
  render() {
    return (
        
        <div className="navStyle">
          <div className="ui fixed centered menu">
          
              <div className="header item"> <i className="shopping cart icon"></i>E-Cart </div>
              <a href="#" className="item"> <i className="chess queen icon"></i> Fashion</a>
              <a href="#" className="item"> <i className="mobile icon"></i> Mobile Phones </a>
              <a href="#" className="item"> <i className="desktop icon"></i> Computers </a>
              <a href="#" className="item"> Others </a>
              <GoogleAuth />
        </div>
      </div>
    )
  }
}
