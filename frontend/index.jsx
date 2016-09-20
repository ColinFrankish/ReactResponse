import React from 'react';
import {render} from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Everywhere from './widgets/everywhere.jsx';
import Mobile from './widgets/mobile.jsx';
import Portrait from './widgets/portrait.jsx';
import Landscape from './widgets/landscape.jsx';
import Desktop from './widgets/desktop.jsx';

class Application extends React.Component {
  render () {
    return (<MuiThemeProvider>
        <Card>
          <Everywhere></Everywhere>
          <Mobile></Mobile>
          <Portrait></Portrait>
          <Landscape></Landscape>
          <Desktop></Desktop>
        </Card>
      </MuiThemeProvider>
    )
  }
}

render(React.createElement(Application), document.getElementById("application"));