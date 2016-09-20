import React from 'react';

export default class Mobile extends React.Component{
  render(){
    return (
      <div className="mobile">
        I am only visible in Mobile view less than 768px wide
      </div>
    )
  }
}