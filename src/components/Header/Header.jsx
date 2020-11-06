import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import './Header.css';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.logo = React.createRef();
    }

    onClick = () => {
        this.logo.current.style.background = "red";
    }

    onOpenLink(link) {
        window.open( link, "_blank")
    }


    render = () => 
    <div id="header">
        <Container fluid>
            <Row className="no-gutters">
                <Col className="logo" onClick={this.onClick} xs={12} sm={12} md={1}>
                    <Image src="../antonio_salsi.png" ref={this.logo} />
                </Col>
                <Col className="title" xs={12} sm={12} md={10}>
                    <h1>Antonio Salsi <br/><b>Developer</b></h1>
                </Col>
                <Col className="social icon-color" xs={12} sm={12} md={1}>
                    <Container fluid className="no-gutters">
                        <Row>
                            <Col xs={2} sm={2} md={12}>
                                <i onClick={this.onOpenLink.bind(this,  "https://www.linkedin.com/in/antonio-salsi-05869421") } className="fab fa-linkedin"/>
                            </Col>
                            <Col xs={5} sm={5} md={12}>
                                <i onClick={this.onOpenLink.bind(this,  "https://www.facebook.com/mrpassy") } className="fab fa-facebook"/>
                            </Col>
                            <Col xs={2} sm={2} md={12}>
                                <i onClick={this.onOpenLink.bind(this,  "https://github.com/passy1977") } className="fab fa-github"/>
                            </Col>
                        </Row>
                    </Container>
                    
                </Col>
            </Row>
        </Container>
    </div>;
} 