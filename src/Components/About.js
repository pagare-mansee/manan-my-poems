import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
class About extends Component {
render() {
return (
<div style={{ marginBottom: "30px" }}>
<Breadcrumb style={{
                background: "#323232",
                color: "white",
                padding: "10px"
        }}>
                <BreadcrumbItem><Link style={{ textDecoration: "none", color: "white" }} to="/home" >Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About</BreadcrumbItem>
        </Breadcrumb>
        <h1 className={"text-center"}>About Me</h1>
        <Container style={{ margin: "auto", backgroundColor: "light-gray" }}>
                <div className="text-center" >
                        <img src="/images/mypic.jpg" alt="my pic" style={{ width: "80%", maxWidth: "280px", height: "auto", margin: "9px" }}></img>
                </div>
                <div>
                        <p className="about"> I am an ordinary girl , I am neither a literature student nor I have read the master pieces. I just write what I feel, in a way that I can consider worth existing.
                                I have started my journey with story writing at an age of  9 . Those stories now seem to be childish but meaningful. Since 2015, I started writing poems and the very first poem 
                                I wrote was on Father's Day that I would like to dedicate to my Tauji . Till today I have written 100+ poems on various aspects: social, political, cultural and personal too, 
                                all having the similarity of being written by heart and full of emotions.
                                I have always dreamt of creating some piece of writing that may bring a positive change in someone's life . I have been writing with this aim in mind and the hope of achieving it in my heart.
                                <br></br>-Mansee Pagare
                        </p>
                        {/* <img src="https://drive.google.com/uc?export=view&id=1RVmsWTxYSlRe-b6grgmQ0mmWnmoJX_uG"/> */}
                        <Link to="https://drive.google.com/file/d/1VvaKDeSAJ-N8CsnmBNUmq5LPOpLeJX0T/view?usp=share_link">
                        <Button>open</Button>
                        </Link>
                     
                      
                </div>

        </Container>

</div>


);
}
}


export default About