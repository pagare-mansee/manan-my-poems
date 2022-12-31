import React from 'react'
import{Nav,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import{Link} from 'react-router-dom'
import "./book.css";
  function Navigation()
  { 
    return(
        <div >
           <Navbar  variant="dark"  expand="false"  collapseOnSelect>
               
             <Navbar.Toggle/>
            
             <Navbar.Collapse>
              
             
              <Nav //className="flex-lg-row" style={{backgroundColor:"brown"}} > 
              >
            {/*  collapseOnSelect was not working
              <Link className='nav-link' eventKey="1" tag="a" to="/home">Home</Link>
              < Link className='nav-link' eventKey="2" tag="a"to="/about" >About</Link>
              <Link   className='nav-link' tag="a" to="/poems" >Poems</Link>
    < Link  className='nav-link' tag="a" to="/gallery" >Gallery</Link>*/}
          
            <Nav.Link eventKey="1" as={Link} to="/home"> 
              Home
            </Nav.Link>
            
            <Nav.Link eventKey="2" as={Link} to="/about">
              About
            </Nav.Link>
             
    
           
          {/*<Nav.Link eventKey="3" as={Link} to="/poems">
              Poems
  </Nav.Link> */}
           
            
            
            <Nav.Link eventKey="3" as={Link} to="/poems">
              Poems
            </Nav.Link>
            
          
             <Nav.Link eventKey="4" as={Link} to="/gallery">
              Gallery
            </Nav.Link>
           

              </Nav>
             
              </Navbar.Collapse>
              {/*<NavbarBrand>logo</NavbarBrand*/}
             </Navbar>
            
        </div>
    )
        
      /*
      <ListGroup>
          <Link className='list-group-item list-group-item-action horizontal' tag="a" to="/home" >Home</Link>
          <Link className='list-group-item list-group-item-action' tag="a" to="/about" >About</Link>
          <Link  className='list-group-item list-group-item-action'tag="a" to="/poems" >Poems</Link>
          <Link className='list-group-item list-group-item-action'tag="a" to="/gallery" >Gallery</Link>
          <Link  className='list-group-item list-group-item-action'tag="a" to="/add" >Add</Link>
      </ListGroup> */
     
    
}
export default Navigation