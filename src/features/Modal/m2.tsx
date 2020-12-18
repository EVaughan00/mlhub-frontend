import React from 'react';
import {Col, Form, FormGroup, Row} from "react-bootstrap";
import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'

function M2(props:any){
    return (
        <>
            <h1>Model Info</h1>
        <Form className="d-flex flex-column " onSubmit={((e:any) =>{
            e.preventDefault();

            const formData = new FormData(e.target),
                formDataObj = Object.fromEntries(formData.entries());

            props.submitModel(formDataObj);
        })}>
            <FormGroup>
                <FormControl placeholder="Description" required/>
            </FormGroup>
            <h1>Model specs</h1>


            <FormGroup className='d-flex flex-row'>
                <FormGroup className='p-2'>
                    <FormLabel>Type</FormLabel>
                    <FormControl placeholder="Description" className="flex-1"  as="select" name="classificaton">
                        <option>TENSORFLOW</option>
                        <option>SCIKIT_LEARN</option>
                        <option>XGBOOST</option>
                        <option>Custom</option>
                    </FormControl>
                </FormGroup>
                <FormGroup className='p-2'>
                    <FormLabel>Python Version</FormLabel>
                    <FormControl placeholder="Description" className="flex-1"  as="select" name="pyEnv">
                        <option>3.7</option>
                        <option>3.5</option>
                        <option>2.7</option>
                    </FormControl>
                </FormGroup>
            </FormGroup>

            <Button variant="primary" type="submit">
                upload
            </Button>
        </Form>
        </>
    )
}

export default M2;