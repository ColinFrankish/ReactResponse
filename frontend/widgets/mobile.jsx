import React from 'react';

export default class Mobile extends React.Component{
  render(){
    var style = {color: "orange", "backgroundColor": "grey", border: "1px solid black"};
    return (
      <div className="mobile">
        <p style={style}>I'm set to be visible in small screens less than 768px wide</p>
      </div>
    )
  }
}