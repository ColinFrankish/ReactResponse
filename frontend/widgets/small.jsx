import React from 'react';


export default class Small extends React.Component{
  render(){
    return (
      <div className="small">
        <p style={{color: "crimson"}}>I appear greater than 768px AND smaller than 992px...</p>
      </div>
    )
  }
}