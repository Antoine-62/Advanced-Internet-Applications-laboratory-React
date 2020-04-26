import React, {Component} from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function NavBar(props) {
    return (
        <div>
        <Navbar bg="info" variant="dark">
            <Navbar.Brand><h2>My Disney Movies Collection</h2></Navbar.Brand>
            <Nav className="mr-auto">

            </Nav>
            
            <input 
                    name="Search" 
                    value={props.Search}
                    onChange={props.handleChangeSearch}
                    placeholder="Search Bar" 
                   
                />
           
        </Navbar>
       <Navbar bg="light" variant="primary">
       <Navbar.Brand>Only get movies with a rating above or equal to</Navbar.Brand>
       <Nav className="mr-auto">
    
        <input 
               name="Sort" 
               value={props.Sort}
               onChange={props.handleChangeSort}
               placeholder="Minimum Rating" 
           />
 
       </Nav>
    
   </Navbar>
   </div>
    )
}

export default NavBar