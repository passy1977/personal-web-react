import React from 'react';
import { Alert } from 'react-bootstrap';
import './Forbidden.css';


export default class Forbidden extends React.Component {
    
    render = () => 
    <div id="error" className="base-container">
        <Alert variant="warning" onClose={() => this.props.history.push("/login")} dismissible>
            <Alert.Heading>Non hai i permessi per accedere</Alert.Heading>
            <p>
                Ho paura che ti sia sbagliato! Non hai i permessi per accedere
            </p>
        </Alert>
    </div>;
} 