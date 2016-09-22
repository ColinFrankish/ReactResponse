require('./content.css')

import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import ReactContainerQuery from 'react-container-query';


const Demo = React.createClass({
  getInitialState: function() {
    return {windowWidth: window.innerWidth};
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render() {
    const items = [0,1,2,3,4].map((n) => (
      <li className={ classNames('demo__item', {'demo__item--feature': n === 0})} >
        <div className='demo__item-pic'></div>
        <div className='demo__item-content'></div>
      </li>

    ))

    return ( 
      <div className={classNames('demo__container', this.props.containerQuery) }>
        <ol className='demo__list'>{ items }</ol>
      </div>
    )
  }
})

const query = {
  middle: {
    minWidth: 768
  },
  wide: {
    minWidth: 992
  },
  widest: {
    minWidth: 1200
  },
}

const Container = ReactContainerQuery.applyContainerQuery(Demo, query);

export default class Query extends React.Component {
  render() { 
    return (
      <div className='container'>
        <Container/>
      </div>
    )
  }
}
