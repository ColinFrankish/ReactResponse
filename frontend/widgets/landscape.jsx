import React from 'react';


export default class Landscape extends React.Component{
  render(){
    var style = {color: "blue", "backgroundColor": "#fff000", border: "1px solid black"};
    return (
      <div className="landscape">
        <p style={style}>I however am the pre-set 'Landscape' view visible just at 840px or more...</p>
      </div>
    )
  }
}