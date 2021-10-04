import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceData = (props) => {
    console.log(props.service);
    const {name,img,price,description} = props.service;
    return (
        <Col className="mt-5">
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

export default ServiceData;