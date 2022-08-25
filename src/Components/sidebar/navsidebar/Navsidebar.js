import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import './Navsidebar.css'



function Navsidebar(){

    const [icon] = useState("soldes"); 
    const [icon2] = useState("soldes2"); 
    const [show, setshow] = useState(true);

    function showHide(){
        if(show === false)
            setshow(true)
        else
            setshow(false)
    }

    return (
        
        <Nav defaultActiveKey="/home" className="flex-column h-50 col-12 d-block">
            <Nav.Link href="/home" className="bg-color text-white text-center px-1 py-3">
                <Image className="mt-1 float-start align-icon" alt="/" src="Images/Accueil.svg" width="15" height="15"/>
                <span className="list-sidebar">Acceuil</span>
            </Nav.Link>
            <Nav.Link eventKey="link-1" className="bg-color text-white text-center px-1 py-3">
                <Image className="mt-1 float-start align-icon" alt="/" src="Images/add.svg" width="15" height="15"/>
                <span className="list-sidebar">Ajouter</span>
            </Nav.Link>
            <Nav.Link eventKey="link-2" className="border-primary border-bottom text-white text-center p-0">
                <Accordion>
                <Accordion.Item className="border-0 bg-primary" eventKey="0">
                    <Accordion.Header className="d-inline-block">
                    <Image className="mt-1 float-start" alt="/" src="Images/mon-espace.svg" width="15" height="15"/>                        
                    <span className="list-sidebar m-auto link-sidebar">Mon espace</span>
                    </Accordion.Header>
                </Accordion.Item>
                </Accordion>
            </Nav.Link>
            <Nav.Link eventKey="link-3" className="border-primary border-bottom text-white text-center p-0">
                <Accordion>
                <Accordion.Item className="border-0 bg-primary" eventKey="0">
                    <Accordion.Header className="d-inline-block">
                        <Image className="mt-1 float-start" alt="/" src="Images/validation.svg" width="15" height="15"/>                        
                        <span className="list-sidebar m-auto link-sidebar">validation</span>
                        </Accordion.Header>
                    </Accordion.Item>
                    </Accordion>
                </Nav.Link>
                <Nav.Link eventKey="link-4" className="border-primary border-bottom text-white text-center p-0">
                <Accordion>
                <Accordion.Item className="border-0 bg-primary" eventKey="0">
                    <Accordion.Header className="d-inline-block">
                        <Image className="mt-1 float-start" alt="/" src="Images/indicateurs.svg" width="15" height="15"/>
                        <span className="list-sidebar m-auto link-sidebar">Indicateurs</span>
                    </Accordion.Header>
                </Accordion.Item>
                </Accordion>
            </Nav.Link>
            <Nav.Link eventKey="link-6" className="border-primary text-decoration-none text-white text-center p-0 nav-link-mobile">
            <Accordion defaultActiveKey="0">
                <Accordion.Item className="border-0 bg-primary s-soldes" eventKey="0"  onClick={() => showHide()}>
                    <Accordion.Header className="d-inline-block w-mobile-accordion">
                        <Image className="mt-1 float-start icon-solde-desktop" alt="/" src={ show ? "Images/" + icon2  + ".svg" : "Images/" + icon + ".svg"} width="15" height="15"/>
                        <Image className="mt-1 float-start icon-solde-mobile" alt="/" src={ "Images/" + icon + ".svg" } width="15" height="15"/>
                        <span className="list-sidebar m-auto link-sidebar">Soldes</span>
                    </Accordion.Header>
                    <div className="shadow-lg rounded position-relative">
                        <Accordion.Body>
                        <Nav.Link eventKey="link-1" className="text-right s-text-accordion text-decoration-none pt-0">Gestion des soldes</Nav.Link> 
                        </Accordion.Body>
                        <Accordion.Body>
                        <Nav.Link eventKey="link-2" className="text-right text-muted s-text-accordion">Ajuster un solde</Nav.Link>  
                        </Accordion.Body>
                        <Accordion.Body>
                        <Nav.Link eventKey="link-3" className="text-right text-muted s-text-accordion">Compteurs</Nav.Link> 
                        </Accordion.Body>
                        <Accordion.Body>
                        <Nav.Link eventKey="link-4" className="text-right text-muted s-text-accordion pb-4">Historique</Nav.Link> 
                        </Accordion.Body>
                    </div>
                </Accordion.Item>
            </Accordion>
            </Nav.Link>
            <Nav.Link eventKey="link-7" className="border-primary border-bottom border-top text-white text-center p-0">
                <Accordion>
                <Accordion.Item className="border-0 bg-primary" eventKey="0">
                    <Accordion.Header className="d-inline-block">
                    <Image className="mt-1 float-start" alt="/" src="Images/recherche.svg" width="15" height="15"/>                        
                    <span className="list-sidebar m-auto link-sidebar">Recherche</span>
                    </Accordion.Header>
                </Accordion.Item>
                </Accordion>
            </Nav.Link>
        </Nav>   


  );
}

export default Navsidebar;
