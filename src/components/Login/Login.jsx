import React from 'react';
import { Col, Container, Form, Row, Button, Card, Alert } from 'react-bootstrap';
import './Login.css';


export default class Login extends React.Component {
    constructor(props) {
        super(props);

       this.state = {
            validated: null,
            showWrongEmailOrPassword: false,
       };
    }
    

    handleSubmit = (event) => {
        const checkForm = event.currentTarget.checkValidity();
        this.setState(
            {
                validated: checkForm
            }
        );

        if (checkForm) {
            alert("OK");
        } else {
            alert("Ko");
        }
        event.preventDefault();
        event.stopPropagation();
    }


    render = () => 
        <Container id="login" className="base-container" fluid="xl">
            {
            this.state.showWrongEmailOrPassword && 
            <Row className={`no-gutters ${this.state.showWrongEmailOrPassword ? "" : "d-none"}`}>
                <Col className="d-flex justify-content-center text-center">
                    <Alert variant="danger" className="card">
                        Login o passwd sbagliati
                    </Alert>
                </Col>
            </Row>
            }
            <Row className="no-gutters">
                <Col className="d-flex justify-content-center text-center">
                    <Card>
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <Card.Text as="div">
                                <Form validated={this.state.validated} onSubmit={event => this.handleSubmit(event)} >
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Iserisci email" 
                                            required/>
                                        <Form.Control.Feedback type="invalid">
                                            Email non valida o vuota
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Iserisci password"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Password vuota
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>;
} 