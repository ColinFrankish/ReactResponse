import React from 'react';


export default class Desktop extends React.Component{
  render(){
    var style = {color: "blue", "backgroundColor": "grey", border: "1px solid black"};
    return (
      <div className="desktop">
        <p style={style}>I am the Lord of the Large Screen, 1200px and larger for me.</p>
      </div>
    )
  }
}