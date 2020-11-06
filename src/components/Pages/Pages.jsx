import React from 'react';
import './Pages.css';
import Page from './Page';
import PageService from '../../services/PageService';

export default class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: PageService.pages,
            containerWidth : 0
        };
        // this.container = React.createRef();
    }

    // componentWillUnmount() {
    //     window.removeEventListener('resize', () => {});
    // }
    // componentDidMount() {
    //     window.addEventListener('resize', () => 
    //         this.setState({containerWidth: this.container.current.offsetWidth})
    //     );
    // }


    render = () => 
        <div 
            id="pages" 
            className="base-container"
            // ref={this.container} 
        >
                {
                    this.state.pages.map (
                        (page, index) => 
                            <Page 
                                key={page.id} 
                                // containerWidth={this.state.containerWidth} 
                                index={index} 
                                page={page} 
                            />
                    )
                }
        </div>;
} 