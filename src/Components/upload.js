import axios from 'axios';
import React, { useState } from 'react'
import {Form, FormGroup,Input,Button, Container,Row,Col}  from 'reactstrap'
import FileBase64 from 'react-file-base64';
/*function Add(){
    const [entry,add]=useState({});
    const addEntry=(e)=>{
       console.log(entry);
       console.log(entry.file[0].name);
       alert(JSON.stringify(entry));
       /* axios.post("http://localhost:1013/poems",entry).then((response)=>{
       alert("success");
        },(error)=>{
            alert("no success");
        }*/

        
 //e.prevtntDefault();
 //   }
 function Upload(){
 const addEntry=(e)=>{
     
    var arr=
        {
            name:"abcd",
            place:"bhch",
            
        }
    
    console.log(arr);
     
   
     e.preventDefault();
 }
    
 const fd=new FormData();
    return(
      
        <Container className={"text-center bg-light"}>
            <h3>Form for entry</h3>
            <br/>
       
         <Form onSubmit={addEntry}>

         <Row>
             <Col lg={6} style={{margin:"auto"}}>
            <FormGroup>
              <label htmlFor="text">Name</label>
              <Input  type="text" placeholder="name" id="name" name="name" onChange={(e)=>
               fd.append('name',e.target.value)}>
                   </Input>
              </FormGroup>
               </Col>
           </Row>
           <Row>
           <Col lg={6} style={{margin:"auto"}}>
            <FormGroup>
            <label htmlFor="date">Date</label>
            <Input  type="date" placeholder="date" id="date" name="date"onChange={(e)=>{
                   fd.append('date',e.target.value)}} ></Input>
            </FormGroup>
            </Col>
            </Row>

            <Row>
            <Col lg={4} style={{margin:"auto"}}>
              <FormGroup>
              <label htmlFor="category">Category</label>
              <br/>
                  <select id="cat" placeholder='Category' onChange={(e)=>{
                   fd.append('cat',e.target.value)}}>
                  <option value="patriotic">Patriotic</option>
                  <option value="life">Life</option>
                  <option value="festival">Festival</option>
              </select>
              </FormGroup>
              </Col>
              <Col lg={4} style={{margin:"auto"}}>
                  
                  <FormGroup>
                  <label htmlFor="file">Select poem : </label>
                  <Input  type="file"  id="file" name="file" onChange={(e)=>{
                   fd.append('file',e.target.files[0],e.target.files[0].name)}}></Input>
                  </FormGroup>
                  </Col>
    
              
              <Col lg={4} style={{margin:"auto"}}>
              <FormGroup>
               Favourite
               <br/>
              <Input type="radio" id="yes" name="isFav"onChange={(e)=>{
                  fd.append('yes',e.target.value)}}></Input>
              <label htmlFor="yes">Yes</label>
                <br/>
             <Input type="radio" id="no" name="isFav"onChange={(e)=>{
                fd.append('no',e.target.value)}}></Input>
              <label htmlFor="no">No</label>
              </FormGroup>
              </Col>
             </Row>
              <br/>
              
              <Row>
              <Col lg={6} style={{margin:"auto"}}>
             
              <FormGroup >
           
              <label htmlFor="behind">Select Behind : </label>
              <Input  type="text-area" style={{height:"200px"}}placeholder="Behind" id="behind" name="behind" onChange={(e)=>{
                   fd.append('behind',e.target.value)}}></Input>
              </FormGroup>
              </Col>
              </Row>
              <br/>
              <Button type="submit" >Add </Button>
              <FileBase64 type="file" multiple={false} onDone={({base64}) => fd.append('file2' ,base64)}/>
         </Form>
         <br/>
         <br/>
        </Container>
    )
}
export default Upload;
