import React from 'react';
import {Col, Form, FormGroup, Row} from "react-bootstrap";
import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'

function M1(props:any){
    return (
        <Form className="d-flex flex-column " onSubmit={((e:any) =>{
            e.preventDefault();

            const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries());

            props.next(formDataObj);
        })}>
            <h1>Setup</h1>
            <FormGroup className='mt-3'>
                <FormLabel>Name</FormLabel>
                <FormControl placeholder="model name" className="" required name="Name"/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Visibility</FormLabel>
                    <FormControl
                        required
                        as="select"
                        name="visibility"
                    >
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </FormControl>
            </FormGroup>

            <Button variant="primary" type="submit">
                Next
            </Button>
        </Form>
    )
}

export default M1;