import React from "react"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'


function FormComponent(props) {
    return (
        <Card style={{ width: '50%', margin: "5% 25%" }}>
            <Card.Body>
            <Card.Title>Add a movie to your collection</Card.Title>
            <Card.Text>Enter the Name : 
               <input 
                    name="Name" 
                    value={props.data.Name} 
                    onChange={props.handleChange} 
                    placeholder="Name" 
                /> </Card.Text> 
                
                <Card.Text>Enter the Description : 
                <textarea 
                    name="Description" 
                    value={props.data.Description}
                    onChange={props.handleChange} 
                    placeholder="Description" 
                /></Card.Text> 
               
               <Card.Text>Enter the rating : 
                <input 
                    name="Rating" 
                    value={props.data.Rating}
                    onChange={props.handleChange} 
                    placeholder="Rating" 
                /></Card.Text> 

                <Card.Text>
                    First, please put your image in folder "Images", located in the folder"public" of the project
                    Then enter name of your image : 
                <input 
                    name="Image" 
                    value={props.data.Image}
                    onChange={props.handleChange} 
                    placeholder="Example : ALADIN.jpg" 
                /></Card.Text> 
                
               
                <Button
                 variant="primary"
                   onClick={() => props.clickChange(props.data.Name,props.data.Description,props.data.Rating,props.data.Image)}
                >Submit</Button>

            </Card.Body>
        </Card>
    )
}

export default FormComponent