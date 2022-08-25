import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { absenceUser}  from '../../Fixtures/fixtures';
import './Cardabsent.css'

export default class Cardabsent extends Component {

    constructor(props){
        super(props);
        //data user fixture
        this.state = {
            absenceUser : absenceUser
        }
    }  


    render() {
        return (
            <Container className="p-4" fluid>
            <Col className="border-table m-0">
                <Table className="m-0" striped bordered hover>
                    <thead>
                        <tr className="bg-white">
                            <th className="th-s" scope="col">Utilisateurs</th>
                            <th className="th-s" scope="col">Categorie</th>
                            <th className="th-s" scope="col">Période</th>
                            <th className="th-s" scope="col">Solde actuel</th>
                            <th className="th-s" scope="col">Solde pris</th>
                            <th className="th-s" scope="col">Solde futur</th>
                            <th className="th-s" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.absenceUser.map((userAbsent, id) => {
                            return(
                                <tr key={id} className="bg-white">
                                    <th scope="row" className="td-s w-categorie-user">{userAbsent.utilisateur}</th>
                                    <td className="td-s w-categorie-user">                                
                                        <span className={"badge-user-" + userAbsent.badge +" p-1  border-light rounded-circle"}></span>
                                        <span>{userAbsent.categorie}</span>
                                    </td>
                                    <td className="td-s">{userAbsent.periode}</td>
                                    <td className="td-s">{userAbsent.soldeActuel}</td>
                                    <td className="td-s">{userAbsent.soldePris}</td>
                                    <td className="td-s">{userAbsent.soldeFuture}</td>
                                    <td className="p-0 text-center w-icon-setting align-middle">
                                        <Image alt="/" src="Images/ajuster.svg" width="23" height="23" className="s-icon-table"/>
                                        <Image alt="/" src="Images/Transferer.svg" width="23" height="23" className="s-icon-table"/>
                                        <Image alt="/" src="Images/solder.svg" width="23" height="23" className="s-icon-table"/>
                                    </td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </Col>
            </Container>
        )
    }
}
