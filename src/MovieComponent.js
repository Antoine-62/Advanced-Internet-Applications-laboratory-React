import React from "react";
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"

function MovieComponent(props) {
    return (
        <Card style={{ width: '50%', margin: "5% 25%" }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Text>Rating : {props.rating}</Card.Text>
            <Button 
                variant="primary"
                onClick={() => props.clickDelete(props.id)}
            >Delete</Button>
            <Card.Text><label>
                Edit rating :
                <input 
                    id = {props.id}
                    name="newRating"
                    value={props.newRating}
                    onChange={props.handleChangeEdit}
                    placeholder="EditRating" 
                    
                />
            </label>
            </Card.Text>
            <Button  
                variant="primary"
                onClick={() => props.clickEdit(props.id, props.newRating)}
            >Edit Rating</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieComponent