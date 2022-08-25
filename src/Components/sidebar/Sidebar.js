import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Navsidebar from './navsidebar/Navsidebar'
import Logosidebarbt from './logosidebarbt/Logosidebarbt'
import './Sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <Col xs={1} sm={2} md={2} lg={2} xl={2} xxl={1} className="flex-column background-sidebar">
                <Navsidebar/>
                <Logosidebarbt/>
           </Col>
        )
    }
}
