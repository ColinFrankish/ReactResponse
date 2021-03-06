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
import Query from'./container_query/content.jsx';
//////////////
import Responsive from './autoresponsive_react/components.jsx';
//////////////
import Bootstrapped from './muicss/bootstrap_copy.jsx';
/////////////
import Grid from './react_bootstrap_grid/bootstrap_grid.jsx';


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
class ContainerQuery extends React.Component{
  render(){
    return (
      <div>
        <div>
          <h1>Blatantly stolen and hacked from 'React Container Query' example from NPM</h1>
          <p>Then re-written to change layouts according to the size of the viewport using CSS</p>
          <p>This will probably not win any design awards. . . BUT ...</p>
          <Query></Query>
        </div>
        <div>
          <p>---------------------------------------------------------------------</p>
        </div>
      </div>
    )
  }
}

class AutoResponsiveReact extends React.Component{
  render(){
    return (
      <div>
        <div>
          <h1>Fiddles with the'AutoResponsive React' library NPM</h1>
          <p></p>
          <p></p>
        </div>
        <div>          
          <Responsive />
        </div>
      </div>
    )
  }
}

class Bootstrapper extends React.Component{
  render(){
    return (
      <div>
        <div>
          <h1>Attempt to make a 'bootstrap' grid with the MUICSS React library NPM</h1>
          <h3>Material UI components really would be handy right . . . why it no work?</h3>
          <p></p>
        </div>
        <div>          
          <Bootstrapped/>
        </div>
      </div>
    )
  }
}

class BootstrapGrid extends React.Component{
  render(){
    return (
      <div>
        <div>
          <h1>Attempt to make a 'bootstrap' grid with the React Bootstrap Grid library NPM</h1>
          <h3>LALALA</h3>
          <p></p>
        </div>
        <div>          
          <Grid/>
        </div>
      </div>
    )
  }
}



render(React.createElement(ReactResponsive), document.getElementById("react-responsive"));
render(React.createElement(ContainerQuery), document.getElementById("container-query"));
render(React.createElement(AutoResponsiveReact), document.getElementById("autoresponsive-react"));
render(React.createElement(Bootstrapper), document.getElementById("bootstrap"));
render(React.createElement(BootstrapGrid), document.getElementById("grid"));
