import React from 'react'
import "./book.css";
import {Button } from 'reactstrap'
import {Link} from 'react-router-dom'
function Book()
{
    return(
       
          <div  style={{marginTop:20}}>
           <div className="container1 bg">
             <div className="container2 blue-box" ></div>
             <div className="container2 gray-box"></div>
            <div className="container2 green-box"></div>
            <div className=" container2 box3"></div>
            <div className=" container2 box4"></div>
             </div>
           
           <br></br>
          < Link to="/pages">
              <div className='text-center'>
      <Button className="bg-danger " size="md">
       Open me...
      </Button>
      </div>
      </Link>
      <br/>
      <br/>
          </div>

   
    )
}
export default Book;