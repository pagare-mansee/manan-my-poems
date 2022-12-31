  import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./acc.css";
import "./flip.css";
import Main from './Main';


  function Listfiltered({ cat }) {
    const [allpoems, setpoems] = useState([{}]);
    useEffect(() => {  console.log("here ");
      axios.get("http://localhost:1013/poems").then(
        (response) => {
          setpoems(response.data)
        })
    },[])
    
    
  /*console.log(allpoems);*/
    var poems

    if (cat !== "favourites") {
  poems = allpoems.filter(p => (p.category === cat)).map((poem) => { return (<div><Main poem={poem} /></div>) })
  }
    else {
    poems = allpoems.filter(p => p.favourite === "yes").map((poem) => { return (<div><Main poem={poem} /></div>) })
    }

    return (
      <div >
        <h1 style={{ textAlign: "center" }}>{cat}</h1>
        <Accordion style={{ backgroundColor: "white", padding: "10px" }}>{poems}</Accordion>
        <ToastContainer />
      </div>


    )
  }

  export default Listfiltered;