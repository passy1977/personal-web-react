import React from 'react';

export default class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconWidth : 0
        };
        this.icon = React.createRef();
    }

    render = () => 
    <div>
        <i ref={this.icon}  className={`icon rounded-circle float-left fas ${this.props.icon}`}></i>
        <h2 className="float-left clearfix" style={{width: `${this.props.containerWidth - this.icon.current.state.width}px`}>{this.props.title}</h2>
        <p className="clearfix w-100">{this.props.descr}</p>
        {this.props.containerWidth}
    </div>
} 