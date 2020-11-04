import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import './Header.css';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.logo = React.createRef();
        
    }


    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.fixShowing);
    // }
    // componentDidMount() {
    //     window.addEventListener('resize', this.fixShowing);
    // }

    // fixShowing() {
    //     const title = document.getElementById("title");
    //     const maxWidth = 1200;
    //     const minWidth = 679;
    //     console.log(""+title.offsetWidth, title.offsetWidth > minWidth,  title.offsetWidth < maxWidth);
    //     if (title.offsetWidth > minWidth && title.offsetWidth < maxWidth) {
    //         let value = `${ ((title.offsetWidth - maxWidth) * -1 ) / 5}px`;
    //         console.log(value);
    //         title.style.paddingLeft = value;
    //     } else {
    //         title.style.paddingLeft = "0";
    //     }
    // }

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
                            <Col xs={5} sm={5} md={12}>
                                <i onClick={this.onOpenLink.bind(this,  "https://www.linkedin.com/in/antonio-salsi-05869421") } className="fab fa-linkedin"/>
                            </Col>
                            <Col xs={5} sm={5} md={12}>
                                <i onClick={this.onOpenLink.bind(this,  "https://www.facebook.com/mrpassy") } className="fab fa-facebook"/>
                            </Col>
                        </Row>
                    </Container>
                    
                </Col>
            </Row>
        </Container>
    </div>;
} 