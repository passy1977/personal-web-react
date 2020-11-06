import React from 'react';

export default class PageItem extends React.Component {
    render = () => 
        <li>
            <h3 className="d-inline text-secondary text-bold">{this.props.item.title1}</h3>{ this.props.item.title1 && this.props.item.title2 && <h3 className="d-inline text-secondary text-bold">|</h3>}<h3 className="d-inline text-bold">{this.props.item.title2}</h3>
            <h4 className="text-bold">{this.props.item.subtitle}</h4>
            <h5>{this.props.item.years}</h5>
            <hr/>
            <div className="descr justify-content">{this.props.item.descr}</div>
        </li>;
} 