import React from 'react';
import { Col, Container, Form, Row, Button, Card } from 'react-bootstrap';
import './Login.css';


export default class Login extends React.Component {
    
    render = () => 
        <Container id="login" className="base-container" fluid="xl">
            <Row className="no-gutters">
                <Col className="d-flex justify-content-center text-center">
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <Card.Text>
                                <Form>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
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