import React from 'react';

export default class Mobile extends React.Component{
  render(){
    return (
      <div className="mobile">
        <p style={{color: "orange"}}>I'm set to be visible in small screens less than 768px wide</p>
      </div>
    )
  }
}