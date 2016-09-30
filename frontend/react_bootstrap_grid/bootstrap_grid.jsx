import React from 'react';
import {render} from 'react-dom';
// require('./build.js')
import ReactGrid from 'react-bootstrap-grid';

export default class Grid extends React.Component {
  render() {
    return(
     <div>
      <div><p> HIOYYYSYSY </p></div>
      <Container>
        <Row>
          <Column medium= "4" ><p>HEELLOOOO</p></Column>
          <Column medium= "4" >HEELLOOOO</Column>
          <Column medium= "4" >HEELLOOOO</Column>
        </Row>
      </Container>  
    </div>
    )
  }
}
