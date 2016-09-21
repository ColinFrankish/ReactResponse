import React from 'react';


export default class Portrait extends React.Component{
  render(){
    var style = {color: "blue", "background-color": "salmon", border: "1px solid black"};
    return (
      <div className="portrait">
        <p style={style}>I am the pre-set 'Portrait' view visible just at 840px or LESS... apparently I just work on tablets..</p>
      </div>
    )
  }
}