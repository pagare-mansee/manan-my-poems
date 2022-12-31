import React, { Component } from "react";
import Link from "react-router-dom/Link";
import Select from 'react-select';
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap';
import Listfiltered from './listout2';

import { Container } from "react-bootstrap";
const options = [
    { value: 'life', label: 'Life' },
    { value: 'festival', label: 'Festival' },
    { value: 'patriotic', label: 'Patriotic' },
    { value: 'favourites', label: 'Favourites' }
  ]
  
  class Poems2 extends Component
 {
    constructor(props) {
        super(props);
        this.state ={ selectedOption:{value:"favourites",label:"Favourites"} }
        this.handleChange=this.handleChange.bind(this)
         }
         handleChange = (selectedOption) => {
          this.setState({ selectedOption}
          );
         }
     
     render()
     {  
         return(

              <Container fluid style={{marginBottom:"40px"}}>
             <Breadcrumb style={{background:"#323232",color:"white", padding:"10px"}}>
              <BreadcrumbItem ><Link style={{textDecoration:"none", color:"white"}} to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Poems</BreadcrumbItem>
            </Breadcrumb>
              
              <Row>
              <Col md="3">
              <h1 className={"text-center"}>Poems</h1>
              </Col>
              <Col md="6"></Col>
              <Col md="3">
              <Select options={options} placeholder="Favourites"
              value={this.selectedOption}
              onChange={this.handleChange}/></Col>
              </Row>
              <Row>
              <Col md="3"></Col>
              <Col md="6">

            <Listfiltered cat={this.state.selectedOption.value}/>
            </Col>
            <Col md="3"></Col>
            </Row>
            
             </Container>
             
             )
     }
 }
 export default Poems2