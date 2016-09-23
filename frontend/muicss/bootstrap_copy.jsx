import React from 'react';
import ReactDOM from 'react-dom';
import Muicss from 'muicss';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

export default class Bootstrapped extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
          <Col md="1">md-1</Col>
        </Row>
        <Row>
          <Col md="8">md-8</Col>
          <Col md="4">md-4</Col>
        </Row>
        <Row>
          <Col md="4">md-4</Col>
          <Col md="4">md-4</Col>
          <Col md="4">md-4</Col>
        </Row>
        <Row>
          <Col md="6">md-6</Col>
          <Col md="6">md-6</Col>
        </Row>
      </Container>
    );
  }
}

