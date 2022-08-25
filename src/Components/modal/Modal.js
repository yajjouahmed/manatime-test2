import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import "./Modal.css"

const Modalnav = () => {

    const [show, setShow] = useState(false);
    
    return (
        <>
            <Image alt="#" onClick={() => setShow(true)} className="m-auto" src="Images/burger-button.svg" width="22" height="22"/><Image/>
            <Modal
            animation={false}
            style={{opacity:1}}
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container className="text-center">
                    <Image alt="/" className="Logo-Manatime my-3" src="Images/Logo.svg" width="280" height="100"/>
                    <div className="test w-100">
                    <Row className="row-cols-2 row-cols-4 g-2 my-3 d-flex justify-content-center">
                        <Col className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border">
                                    <Image alt="/" src="Images/Module_Planning.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-secondary mt-0 mb-4">Planning</a>
                                </div>
                            </div>
                        </Col>
                        <Col  className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border border-cursor">
                                    <Image alt="/" src="Images/Module_Absences.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-cursor mt-0 mb-4">Absences</a>
                                </div>
                            </div>
                        </Col>
                        <Col  className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border">
                                    <Image alt="/" src="Images/Module_Heures.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-secondary mt-0 mb-4">Note de frais</a>
                                </div>
                            </div>
                        </Col>
                        <Col  className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border">
                                    <Image alt="/" src="Images/Module_NotedeFrais.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-secondary mt-0 mb-4">Note de frais</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border">
                                    <Image alt="/" src="Images/Module_Présence.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-secondary mt-0 mb-4">Présences</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border">
                                    <Image alt="/" src="Images/Module_Compétences.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-secondary mt-0 mb-4">Compétences</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border">
                                    <Image alt="/" src="Images/Module_SalaireetPAie.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-secondary mt-0 mb-4">Salaire et paie</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border">
                                    <Image alt="/" src="Images/Module_Entretiens.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-secondary mt-0 mb-4">Entretiens</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border">
                                    <Image alt="/" src="Images/Module_Matériels.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-secondary mt-0 mb-4">Matériels</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border">
                                    <Image alt="/" src="Images/Mdule_Documents.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-secondary mt-0 mb-4">Documents</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="w-box-module">
                            <div className="col rounded">
                                <div className="d-flex flex-column border">
                                    <Image alt="/" src="Images/Module_RH.svg" className="img-category-modal mx-auto d-block" width="80%"/>
                                    <a href="/" className="text-decoration-none text-secondary mt-0 mb-4">RH</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="w-box-module">
                            <div className="d-flex flex-column border border-white">
                            </div>
                        </Col>
                    </Row>
                        </div>
                    </Container>
                </Modal.Body>
        </Modal>
        </>
  );
}

export default Modalnav;