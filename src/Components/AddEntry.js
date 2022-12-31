    import axios from 'axios';
import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';

    class Add extends Component {
        constructor(props) {
            super(props);
            this.state = { name: "", date: "", isFav: "", file: "", behind: "", cat: "patriotic" };
            this.addEntry = this.addEntry.bind(this);
            this.add = this.add.bind(this);
        }
        add = (e) => {
            let value = e.target.value.toString();
            this.setState({
                    [e.target.name]: value
            })
        }
        addEntry = (e) => {
            e.preventDefault();
            const entry = { ...this.state };
            console.log(entry);
            axios({url:"http://localhost:1013/poems",
                method: "post",
                data: entry,
                headers: {
                    "Content-Type": "application/json"
                }}
            )

                .then((response) => {
                    alert("success");
                }, (error) => {
                    alert("no success");
                })

        }

        render() {
            return (
                <Container Fluid className={"text-center bg-light"}>
                    <h3>Form for entry</h3>
                    <br/>
                    <Form onSubmit={this.addEntry}>

    <Row>

        <Col lg={6} style={{ margin: "auto" }}>
            <FormGroup>
                <label htmlFor="text">Name</label>
                <Input type="text" placeholder="name" id="name" name="name" onChange={(e) => {
                    this.add(e)
                }}></Input>
            </FormGroup>
        </Col>
    </Row>

    <Row>
        <Col lg={6} style={{ margin: "auto" }}>
            <FormGroup>
                <label htmlFor="date">Date</label>
                <Input type="date" placeholder="date" id="date" name="date" onChange={(e) => {
                    this.add(e)
                }}></Input>
            </FormGroup>
        </Col>
    </Row>

    <br />
    <Row>
        <Col lg={6} style={{ margin: "auto" }}>
            <FormGroup>
                <label htmlFor="category">Category</label>
                <br />
                <select id="cat" name="cat" placeholder='Category' onChange={(e) => { this.add(e) }}
                >
                    <option value="patriotic">Patriotic</option>
                    <option value="life">Life</option>
                    <option value="festival">Festival</option>
                </select>
            </FormGroup>
        </Col>
        </Row>
        
    <div>
        <label htmlFor="file"><br/>
        Select poem : </label>
        <br/>
        
        <FileBase64 type="file" multiple={true}  onDone={(base64)=>console.log(base64.base64)}></FileBase64>
    </div>

    <Row>
        <Col lg={6} style={{ margin: "auto" }}>
            <FormGroup
                onChange={(e) => {
                    this.add(e)
                }}>
                Favourite
                <br />
                <label htmlFor="isFav">Yes</label>
                <Input type="radio" id="isFav" name="isFav" value="yes" ></Input>

                <br />
                <label htmlFor="isFav">No</label>
                <Input type="radio" id="isFav" name="isFav" value="no"></Input>

            </FormGroup>
        </Col>
    </Row>

    <Row>
        <Col lg={12} style={{ margin: "auto" }}>

            <FormGroup className="text-center" >

                <label htmlFor="behind">Behind : </label>
                <textarea style={{width: "50%",height: "150px"}}placeholder="Behind" id="behind" name="behind" value={this.state.behind} onChange={(e) => {
                    this.add(e)
                }}></textarea>
            </FormGroup>
        </Col>
    </Row>
    <br />
    <Button type="submit" >Add </Button>


    </Form>
    <br />
    <br />
    {/*<img src={entry.file} alt="Red dot" />*/}
    </Container>
    )
    }

    }
                
    export default Add
