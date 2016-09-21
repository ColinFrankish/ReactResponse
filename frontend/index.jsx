import React from 'react';
import {render} from 'react-dom';

import MediaQuery from 'react-responsive';

import Everywhere from './widgets/everywhere.jsx';
import Mobile from './widgets/mobile.jsx';
import Small from './widgets/small.jsx';
import Medium from './widgets/medium.jsx';
import BigDevice from './widgets/bigdevice.jsx';
import Portrait from './widgets/portrait.jsx';
import Landscape from './widgets/landscape.jsx';
import Desktop from './widgets/desktop.jsx';
///////////////

class ReactResponsive extends React.Component{
  render(){
    return (
      <div>
        <div>
          <div>
            <h1>Below, implementation of 'ReactResponsive' package from NPM</h1>
            <p>This library allows you to recreate media queries in React, according to browser width/height, device width/height etc. You can nest the prompts too - see /index.jsx</p>
          </div>
          <Everywhere></Everywhere>
          <MediaQuery query='(max-width: 768px)'>
            <Mobile></Mobile>
          </MediaQuery>
          <MediaQuery query='(min-width: 768px)'>
            <MediaQuery query='(max-width: 992px)'>
              <Small></Small>
            </MediaQuery>
          </MediaQuery>
          <MediaQuery query='(min-width: 992px)'>
            <MediaQuery query='(max-width: 1200px)'>
              <Medium></Medium>
            </MediaQuery>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 1500px)'>
            <BigDevice></BigDevice>
          </MediaQuery>
          <MediaQuery query='(orientation: portrait)'>
            <Portrait></Portrait>
          </MediaQuery>
          <MediaQuery query='(orientation: landscape)'>
            <Landscape></Landscape>
          </MediaQuery>
          <MediaQuery query='(min-width: 1200px)'>
            <Desktop></Desktop>
          </MediaQuery>
        </div>
        <div>
          <p>---------------------------------------------------------------------</p>
        </div>

      </div>
    )
  }
}
class NewShit extends React.Component{
  render(){
    return (
      <div>
        SOME NEW SHIT
      </div>
    )
  }
}

render(React.createElement(ReactResponsive), document.getElementById("react-responsive"));
render(React.createElement(NewShit), document.getElementById("newshit"));