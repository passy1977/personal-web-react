import React from 'react';
import PageItem from './PageItem';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconWidth : 0
        };
        if (!(props instanceof Object)) {
            throw new Error("Oggetto non valido");
        }
    }

    render = () => 
        <div>
            <i className={`icon rounded-circle d-inline fas ${this.props.page.icon}`}></i>
            <h2 className="d-inline">{this.props.page.title}</h2>
            <p className="descr">{this.props.page.descr}</p>
            {this.props.page.list && this.props.page.list.map (
                    (item, index) => 
                        <PageItem 
                            key={item.id} 
                            index={index} 
                            pageId={this.props.page.id}
                            item={item} 
                        />
                )
            }
        </div>;

} 