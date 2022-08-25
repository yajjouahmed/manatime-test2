import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Modalnav from '../modal/Modal';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import './Barnav.css'


export default class Barnav extends Component {

    render() {
        return (
            <Container className="row p-0 m-auto" fluid>
                <Navbar className="d-flex m-0 p-0 bloc-nav justify-content-start border-0 " expand="xxl" variant="light" bg="light">
                    <Col sm={2} md={2} lg={2} xl={2} xxl={1} className="btn-menu-mobile text-center border-end p-2">
                        <Navbar.Brand href="#" className="me-auto icon-burger py-3 h-auto w-100"> 
                            <Modalnav></Modalnav>
                        </Navbar.Brand>
                    </Col>
                    <Col className="p-0"  sm={8} md={6} lg={6} xxl={6}>
                        <Breadcrumb className="d-flex">
                            <Breadcrumb.Item className="mx-2 breadcrumb-stripe">
                                <Image alt="/" src="Images/Absence_Icon.svg" width="30" height="30"/>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="text-breadcrumb align-middle breadcrumb-stripe">
                                <span className="text-absence">Absence</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="mx-2">
                                <Image alt="/" src="Images/stripe2.svg" width="17" height="17" className="hide-stripe"/>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="mx-2">
                                <Image alt="/" src="Images/scale-balanced-solid.svg" width="17" height="17"/>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="text-breadcrumb align-middle">
                                <span className="text-sous-module color-sous-module">Sous module</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="mx-2">
                                <Image alt="/" src="Images/stripe2.svg" width="17" height="17" className="hide-stripe"/>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="text-breadcrumb align-middle">
                                <span className="text-sous-module2 color-sous-module">Sous sous module</span>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col  sm={2} md={4} lg={4} xxl={5}className="p-0 bloc-profil-nav">
                        <div className="btn-profil-mobile">
                            <Dropdown>
                            <Dropdown.Toggle className="btn-profil border-0" id="dropdown-basic">
                                <Image
                                    alt="/"
                                    src="Images/Photo.png"
                                    width="34"
                                    height="34"
                                    className="mx-2"
                                />
                                <span className="badge-user position-absolute translate-middle p-1 rounded-circle"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    <span className="name d-block font-weight-bold text-body text-truncate">Céline Dubois</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <span className="company text-company text-muted text-truncate">Eiffage</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <Image
                                    alt="/"
                                    src="Images/Help.svg"
                                    width="30"
                                    height="30"
                                    className="m-1"
                                    />
                                    <Image
                                        alt="/"
                                        src="Images/Settings.svg"
                                        width="30"
                                        height="30"
                                        className="mx-2 my-1"
                                    />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    <div className="d-flex profil-nav justify-content-end py-1 px-3">
                        <div className="px-3 fs">
                            <Image
                                alt="/"
                                src="Images/Help.svg"
                                width="30"
                                height="30"
                                className="my-1"
                            />
                            <Image
                                alt="/"
                                src="Images/Settings.svg"
                                width="30"
                                height="30"
                                className="mx-2 my-1"
                            />
                            </div>
                            
                                <div className="d-inline-block text-center mx-4">
                                    <span className="name d-block mx-1 font-weight-bold text-body text-truncate">Céline Dubois</span>
                                    <span className="company text-company mx-1 text-muted text-truncate">Eiffage</span>
                                </div>
                                <div className="d-inline-block align-bottom">
                                    <Image
                                        alt="/"
                                        src="Images/Photo.png"
                                        width="34"
                                        height="34"
                                        className="mx-2"
                                    />
                                    <span className="badge-user position-absolute translate-middle p-1 rounded-circle"></span>
                                </div>
                        </div>
                    </Col>
                </Navbar>
            </Container>
        )
    }
}
