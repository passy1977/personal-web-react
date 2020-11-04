import React from 'react';
import './Pages.css';
import Page from './Page';
import PageService from '../../services/PageService';

export default class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pages: PageService.pages};
    }

    render = () => 
    <div id="pages">
            {
                this.state.pages.map ((page, index) => <Page key={page.id} index={index} icon={page.icon} title={page.title} descr={page.descr} />)
            }
    </div>;
} 