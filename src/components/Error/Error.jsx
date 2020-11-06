import React from 'react';
import { Alert } from 'react-bootstrap';
import './Error.css';


export default class Error extends React.Component {
    
    render = () => 
    <div id="error" className="base-container">
        <Alert variant="danger" onClose={() => this.props.history.push("/")} dismissible>
            <Alert.Heading>Errore 404! Pagina non trovata</Alert.Heading>
            <p>
                Ho paura che ti sia sbagliato! Pagina non trovata
            </p>
        </Alert>
    </div>;
} 