import React from 'react'
import { Link } from 'react-router-dom'
import {Form, FormGroup,Input,Button, Container,Row,Col}  from 'reactstrap'
function Login(){
return(
<Container className={"text-center bg-light"}  >
            <h3 style={{marginTop:"30px"}}>Login</h3>
            <br/>
         <Form style={{marginBottom:"40px"}}>
             <Row  >
             <Col lg={6} style={{margin:"auto"}} >
        < FormGroup>
  <label htmlFor='name'>Name</label>
  <Input type="text" id="uname" name="uname"></Input>
     </FormGroup>
     </Col>
     </Row>
     <Row>
     <Col lg={6} style={{margin:"auto"}}>
     < FormGroup>
  <label htmlFor='pw'>Password</label>
  <Input type="password" id="pw" name="pw"></Input>
     </FormGroup>
     </Col>
     </Row>
     <br/>
     <Link to="/add">
     <Button type="submit" >submit </Button>
     </Link>
</Form>
 </Container>
)
}
export default Login