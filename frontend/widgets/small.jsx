import React from 'react';


export default class Small extends React.Component{
  render(){
    var style = {color: "crimson", "backgroundColor": "#7CFF61", border: "1px solid black"};
    return (
      <div className="small">
        <p style={style}>I appear greater than 768px AND smaller than 992px...</p>
      </div>
    )
  }
}