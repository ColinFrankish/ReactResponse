import React from 'react';


export default class BigDevice extends React.Component{
  render(){
    return (
      <div className="bigdevice">
        <p style={{color: "purple"}}>I am only here if the DEVICE WIDTH is greater than 1500px ...</p>
      </div>
    )
  }
}