import React from 'react';
import packageJson from '../../../package.json';
import './Footer.css';


export default class Footer extends React.Component {
    
    render = () => 
    <div id="footer">
        <div className='app-version'>version: {packageJson.version}</div> 
    </div>;
} 