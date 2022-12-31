    import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, CardImg } from 'reactstrap';
import audio from './page-flip.mp3';

import "D:/Manan/Manan-1/src/css/pages.css";


    class Pages extends Component {
    constructor(props) {
    super(props);
    this.state = { cur: 1, p1: "", p2: "", p3: "" };
    this.next = this.next.bind(this);
    this.fun = this.fun.bind(this);
    }
    fun=(c)=>{
      <ul>
      
          <li>
            {c}
          </li>
         
    </ul>
    }
    next = () => {

    new Audio(audio).play();
    switch (this.state.cur) {
      case 1:
        this.setState({ cur: this.state.cur + 1, p1: "flipped", p2: "", p3: "" });
        break;
      case 2:
        this.setState({ cur: this.state.cur + 1, p1: "flipped", p2: "flipped", p3: "" });
        break;
      case 3:
        this.setState({ cur: this.state.cur + 1, p1: "flipped", p2: "flipped", p3: "flipped" });
        break;
      default:
        this.setState({ cur: 1, p1: "", p2: "flipped", p3: "flipped" });

    }

    }


    render() {

    return (

      <div style={{ marginTop: 10 }}>
        <div className="container1">
          <div className={"page " + this.state.p1} id="p1">
            <div className="headings">
              Welcome Note</div>
            <p className='content'>
              Hello and welcome to our website.
              <br />
              I am a sensitive person with a high tendency to  think. I analyse my surroundings deeply
              and I pen them down with all my heart.
              <br />
              This website is a joint effort by me and my friend to convey the same to you. <br />I hope you would enjoy reading.
            </p>
            <br />


          </div>
          <div className={"page " + this.state.p2} id="p2">
            <div className="headings">Contents</div>
           
            <Link to="/poems">
              <Card style={{
                width: "50%", height: "40%", margin: "auto", backfaceVisibility: "hidden", background: "black", cursor:
                  "pointer"
              }} >
                <CardImg top width="100%" height="100%" src="./images/poetry.jpg" ></CardImg>
              </Card>
            </Link>
            <br />
            <Link to="/home">
              <Card style={{ width: "50%", height: "40%", margin: "auto", backfaceVisibility: "hidden", background: "black", cursor: "pointer" }}>
                <CardImg top width="100%" height="100%" src="./images/stories.jfif"></CardImg>
              </Card>

            </Link>
            </div>
            
          <div className={"page " + this.state.p3} id="p3">
            <div className="headings">Thanking Note</div>
            <p className="content">

              As Guest is God, firstly a special thanks to my readers (guests) who took their time to read my creations.
              A special thanks to my co-equal partner and friend <i>Anmol Dogra</i> who worked with me to turn this idea to execution.
              Most importantly, I am grateful to my family, friends and the God who have always been contributing directly or indirectly in everything I do.

            </p>



          </div>
          <div className="page" id="p4">
            <h1 style={{fontFamily:'Gotu', color:"red",textAlign:"center",marginTop:"5px"}}>मनन </h1>
            <h3 style={{fontFamily:'Gotu', color:"red",textAlign:"center",marginTop:"5px"}}>मन का आईना </h3>
            <div className="content" style={{ color: "white",fontSize: "18px" }}>
            <p >
            With this my motive of creating my book is achieved. This book shows my thoughts , emotions and ultimately like a mirror shows me and that's why I named it as 'Man ka Aaina'.
            <br/>
        I would like to know  your thoughts after reading my thoughts, so please just scan this QR code and drop an email to me.
      Criticism and appreciation both are equally welcome.
            </p>
            </div>
            <div className="text-center">
            <img src="./images/qr.png"  alt="qr" width="120px" height="140px" />
            </div>
          </div>

        </div >

        <div className='text-center'>
          < Link to="/home">
            <Button className="bg-danger" size="md" style={{ marginRight: "10px", }}>Back</Button>
              </Link>

          <Button id="btn" onClick={this.next} className="bg-danger">Next</Button>

          {/*<Link to={{pathname:"/try", state:{name:"abcd",age:19}}}>
            <Button className="bg-danger" size="md" style={{ marginRight: "10px", }}>Try</Button>

            </Link>*/}
        </div>
        <br />
      </div>

    )
    }
    }
    export default Pages;