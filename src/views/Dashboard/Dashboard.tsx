import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";

import axios from 'axios';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {Button, Form, Navbar, Row} from "react-bootstrap";

import MLTable from "../../features/Model_table/MLTable";

import config from '../../config.json';

interface Model {
    Name:string,
    visibility:string,
    classification:string,
    pyEnv:string
}


function Dashboard(){

    const history = useHistory();

    const [models,updateModels] = useState([] as Model[]);

    useEffect(()=>{
        getModels().then(updateModels)
    },[]);


    return (
        <>
            <Container fluid className="p-0">
                <Row>
                    <Col>
                        <MLTable models={models}/>
                    </Col>
                </Row>
            </Container>
            <Navbar className="bg-light justify-content-between fixed-bottom">

                <Form inline className="ml-auto" onSubmit={(e)=>{
                    e.preventDefault();
                    history.push("/upload");
                }}>
                    <Button type="submit">Submit</Button>
                </Form>
            </Navbar>
        </>
    );
}

async function getModels(){
    const response = (await axios.get(`${config.baseUrl}/models/list`).catch(console.log));


    if(response && response.data){
        return response.data as Model[];
    }
    else
    {
        return [];
    }

}


export default Dashboard;