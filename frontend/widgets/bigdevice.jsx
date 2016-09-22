import React from 'react';


export default class BigDevice extends React.Component{
  render(){
    var style = {color: "purple", border: "1px solid black"};
    return (
      <div className="bigdevice">
        <p style={style}>I am only here if the DEVICE WIDTH is greater than 1500px ...</p>
      </div>
    )
  }
}