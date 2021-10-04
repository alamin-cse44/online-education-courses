import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Home from '../Home/Home';
import './Data.css';

const Data = (props) => {
    // console.log(props.data);
    const {name,img,description,price} = props.data;
    return (
        <Col className="">
            <Card className="shaddow">
                <Card.Img className="images" variant="top" src={img} />
                <Card.Body>
                <Card.Title className="text-primary">{name}</Card.Title>
                <h3>Price : ${price}</h3>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button className="button">Enter The Course</Button>
                </Card.Body>
            </Card>
        </Col>    
           
    );
};

export default Data;