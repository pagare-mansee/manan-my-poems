

    import React, { Component } from 'react';
import About from './Components/About';
import Add from './Components/AddEntry';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Home from './Components/Home';
import Navigation from './Components/Nav';
import Pages from './Components/pages';
import Poems2 from './Components/Poems2';
import Show from './Components/ShowSingle';
       
    import { BrowserRouter, Route } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
    
    class App extends Component {

      render(){
      return (

        // with attributes
        <BrowserRouter>
        <Container fluid >
            
            <Row className={"header"}>
              
                <Col sm={1} ><Navigation/></Col>
                <Col sm={10}  > <Header/></Col>
                
                </Row >
              <br>
              </br>
                    <Row className={"bgWhole"}>
                    <Route path="/home" component={Home} exact></Route>
                    < Route path="/" component={Home} exact></Route>
                    < Route path="/about" component={About} exact></Route>
                    < Route path="/gallery" component={Gallery} exact></Route>
                    < Route path="/add" component={Add} exact></Route>
                  <Route path="/poems" component={Poems2} exact></Route>
                  <Route path="/poems/:id" component={Show} exact/>
                  <Route path="/pages" component={Pages} exact/>
                  
                  </Row>
            </Container>
            </BrowserRouter>
                  
                
                  


      );
    }
      
    }

    export default App;
