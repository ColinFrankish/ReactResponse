import React from 'react';


export default class Medium extends React.Component{
  render(){
    var style = {color: "#FE1CFF", "backgroundColor": "black", border: "1px solid black"};
    return (
      <div className="medium">
        <p style={style}>I am only here between 992px and 1200px ...</p>
      </div>
    )
  }
}