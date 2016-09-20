import React from 'react';
import {render} from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MediaQuery from 'react-responsive';

import Everywhere from './widgets/everywhere.jsx';
import Mobile from './widgets/mobile.jsx';
import Small from './widgets/small.jsx';
import Medium from './widgets/medium.jsx';
import Portrait from './widgets/portrait.jsx';
import Landscape from './widgets/landscape.jsx';
import Desktop from './widgets/desktop.jsx';


class Application extends React.Component{
  render(){
    return (
      <div>
        <div>
          <div>
            <h1>Stuff should appear and disappear and shit .</h1>
          </div>
          <Everywhere></Everywhere>
          <MediaQuery query='(max-width: 768px)'>
            <Mobile></Mobile>
          </MediaQuery>
          <MediaQuery query='(min-width: 768px)' query='(max-width: 992px)'>
            <Small></Small>
          </MediaQuery>
          <MediaQuery query='(min-width: 992px)' query='(max-width: 1200px)'>
            <Medium></Medium>
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

      </div>
    )
  }
}


render(React.createElement(Application), document.getElementById("application"));