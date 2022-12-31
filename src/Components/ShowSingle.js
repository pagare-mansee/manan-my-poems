import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button, CardImg } from 'reactstrap';

import { Link } from 'react-router-dom';
import "./pages.css";

function Show({match}){
  const [allpoems,setallpoems]=useState(
    [{}]);
  
  useEffect(()=>{
    axios.get("http://localhost:1013/poems").then(
    (response)=>{
      setallpoems(response.data)
  })},[])
  console.log(allpoems)
    var selected=allpoems.filter(( poem=>(poem.id===parseInt(match.params.id))))[0]
    
   if(selected===undefined)
   { 
   return(<div></div>)
   }
    return(
       
       <div style={{marginTop:20}}>
         <div className="container1">
         <div className="page">
           <div className="content text-center">{selected.name}</div>
           <Card style={{ width:"100%", height:"90%",margin:"auto" ,borderRadius:"20px"}} >
           <CardImg top style={{ width:"100%", height:"100%", borderRadius:"20px"}}src={selected.image} ></CardImg>
          </Card>
         </div>
         </div > 
        
       
        <Link to="/home">
              <div className='text-center'>
      <Button className="bg-danger " size="md">
       Home
      </Button>
      </div>
      </Link>
      <br/>
      </div>

  
 
  )
       
    
}

export default Show;