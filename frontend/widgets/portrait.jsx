import React from 'react';


export default class Portrait extends React.Component{
  render(){
    return (
      <div orientation="portrait">
        <p style={{color: "blue"}}>I am the pre-set 'Portrait' view visible just at 840px or LESS...</p>
      </div>
    )
  }
}