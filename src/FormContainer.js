import React, {Component} from "react"
import FormComponent from "./FormComponents"

class Form extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            Name: "",
            Description: "",
            Rating: "",
            Image: ""
        }
        this.handleChange = this.handleChange.bind(this)
       
    }
    
    handleChange(event) {
        const {name, value} = event.target
        if(name === "Rating")
        {
            if(isNaN(value))
            {
                alert("Please don't enter letters for the rating")
            }
            else
            {
                this.setState({
                    [name]: value
                }) 
            }
        }
        else{
            this.setState({
                [name]: value
            }) 
        }
    }

    
    render() {
        return(
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
                file={this.fileInput}
                clickChange={this.props.clickChange}
            />
        )
    }
}

export default Form
