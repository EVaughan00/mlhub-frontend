import React from 'react';

import {Table} from "react-bootstrap";

interface Model {
    name:string,
    visibility:string,
    classification:string,
    pyEnv:string
}

const dtype = ['name',
    'visibility',
    'classification',
    'pyEnv'];

function MLTable(props:any) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    {
                      dtype.map(name => {
                          return (<th>
                              {name}
                          </th>)
                      })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    generate_list(props.models)
                }
                </tbody>
            </Table>
        </>
);
}

function generate_list(models:Model[]){

    console.log(models);

    return(
        models.map((model:Model, index:number) =>{
            return (<tr key={index}>
                <td>{model.name}</td>
                <td>{model.visibility}</td>
                <td>{model.classification}</td>
                <td>{model.pyEnv}</td>
            </tr>);
        })
    )

}


export default MLTable;