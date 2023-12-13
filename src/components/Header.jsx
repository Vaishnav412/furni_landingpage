import React from 'react'
import { Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Briefcase } from 'react-feather';



function Header() {
    return (
        <div>

            <Navbar expand="lg" className="bg-primary">
                
                    <Container fluid>
                        <Navbar.Brand href="#">&nbsp;    <span><Briefcase/></span>    FURNI.</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                           <div style={{paddingLeft:"150px"}}>
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1">OFFICE FURNITURE</Nav.Link>
                                    <Nav.Link href="#action2">DISIGN SERVICES</Nav.Link>
                                    <Nav.Link href="#action3">FREE INSTALLATION</Nav.Link>
                                </Nav>
                           </div>
                            <Form className="d-flex">
                            <Button variant="success">Build My Office</Button>{' '}
                                
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                
            </Navbar>

        </div>
    )
}

export default Header