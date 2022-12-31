  import 'bootstrap/dist/css/bootstrap.css';
  import React, { Component } from 'react';
  import { Accordion, Card, Col, Row, useAccordionButton } from 'react-bootstrap';
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Button, CardHeader, CardImg } from 'reactstrap';
  import "D:/Manan/Manan-1/src/css/flip.css";

  function  CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey)
      return (
      <CardHeader
        
        style={{ cursor:'pointer' }}
          onClick={decoratedOnClick}>
          {children}
        
      </CardHeader>
    );
  }
  class Main extends Component{
    constructor(props){
        super(props);
        this.state={showBack:true};
        this.fun1=this.fun1.bind(this);
        this.fun2=this.fun2.bind(this);
        
    }
    

    copyLink=(poem)=>
    {   if(navigator.clipboard===undefined)
      {
      alert(` Use the link : http://localhost:3000/poems/${poem.id}`);
      }
      else

  navigator.clipboard.writeText( `http://localhost:3000/poems/${poem.id}`);
  }
  showToast=()=>{
  if(navigator.clipboard!==undefined)
  toast.success("link copied ",{autoClose:1000,hideProgressBar:true})
  }


  render(){
    const poem= this.props.poem;
        return(
        
      <div style={{padding:"10px 5px 10px 5 px",margin:"10px 0px 10px 0px",background:"#323232", color:"white"} } key={poem.id}>
    <CustomToggle eventKey={poem.id}>{poem.name} | {poem.date}<i className="fa fa-angle-down fa-lg" style={{float:'right'}}></i> </CustomToggle>
            
            <Accordion.Collapse eventKey={poem.id}>
            <div className="bg-light" style={{marginTop:10}}>
                  <div className="container3">
                  <div className="page2" >
                    <div style={{color:"black", padding:"5px",textAlign:"center",fontSize: "20px",
      }} >     {poem.name}</div>
                    <Card style={ {width:"100%", height:"80%"}}>
        
                      <div className={`flip-card-inner  ${this.state.showBack ? "" :"flip"}`} style={{width:"100%", height:"100%" }}>
                        
                  <CardImg top className='flip-card-front' style={{width:"100%", height:"100%" }} src={poem.image}>
                
                  </CardImg>
                  <div className='flip-card-back' style={{width:"100%", height:"100%" }}>
                    
                    <p className='behind'>{poem.behind}</p>
                  </div>
                  </div>
                  </Card>
                    <Row>
                    <Col className="text-center">
                    <Button outline color="secondary" size="sm" style={{fontSize:14,textAlign:"center",color:"black",marginTop:"10px"}}
                    onClick={()=>{this.copyLink(poem);this.showToast()}}>
                  Share 
                  </Button>
                  </Col>
                  <Col className="text-center"  >
                    <Button outline color="secondary" size="sm" style={{fontSize:13,textAlign:"left",color:"black", marginTop:"10px"}}
                    onClick={()=>this.setState({showBack:!this.state.showBack})}>
                  
                  {this.state.showBack?"Behind the poem":"Back to the poem"}
                  </Button>
                  </Col>
                  </Row>
                  <br/>
              </div>
              </div > 
                </div>
          
            </Accordion.Collapse>
            </div>
                
              )
          }
        }
          

  export default Main;