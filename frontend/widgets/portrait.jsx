import React from 'react';


export default class Portrait extends React.Component{
  render(){
    return (
      <div className="portrait">
        I am only visible in Portrait view between 768px and 992px
      </div>
    )
  }
}