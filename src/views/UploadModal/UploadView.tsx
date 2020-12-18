import React, {useState} from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import {Button, Col, Row, Form, FormControl, Modal,} from 'react-bootstrap';

import M1 from '../../features/Modal/m1';
import M2 from '../../features/Modal/m2';

import config from '../../config.json';

interface Model {
    Name:string,
    visibility:string,
    classification:string,
    pyEnv:string
}


function UploadView(){

    const [status, next] = useState(false);
    const [loading, updateLoading] = useState(false);

    const [modelInfo, updateInfo] = useState({
       Name:"",
       visibility:"",
       classification:"",
       pyEnv:""
    });

    return (<>
        <Container fluid className="d-flex flex-column justify-content-center align-content-center h-100">

            <div className="flex-1 ml-auto  mr-auto border border-dark p-5 " style={{
                borderRadius:25,
                borderWidth:"10px",
            }}>
            {
                loading?<img src='https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif'/>:
                (status?<M2 submitModel = {(data:any)=>{
                    updateInfo({...modelInfo, ...data});
                    updateLoading(true);
                    uploadModel(modelInfo).then(()=>{
                    setInterval(()=>{ window.location.href = "/";},1000);
                    });
                }
                }/>:
                <M1 next={(data:any)=>{
                    next(true);
                    updateInfo({...modelInfo, ...data});
                }}/>)}
            </div>

        </Container>
        </>)
}

async function uploadModel(modelInfo:Model){
   await axios.post(`${config.baseUrl}/models/create`,{
        body:modelInfo
    }).catch((e) => {
        console.log(e);
   })
}



export default UploadView;