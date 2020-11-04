import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class Pages extends React.Component {
    render = () => 
    <div>
        <i className={`icon fab ${this.props.icon}`} xs={1}></i>
        <h2>{this.props.title}</h2>
        <p className="descr">{this.props.descr}</p>
    </div>;
} 