import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "",
            phone: "",
            location: "",
        }
    };
    handleChange = (e) => {
      e.preventDefault();
  
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state)
        this.setState({
            name: "",
            phone: "",
            location: "",
        })
      //  console.log("form submitted",this.state); 
    }

    render() {
        return (
            <>
            <Form style={{marginTop: "1rem"}} onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.handleChange} value={this.state.name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone:</Form.Label>
        <Form.Control type="tel" placeholder="Telephone Number" name="phone" onChange={this.handleChange} value={this.state.phone} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Location:</Form.Label>
        <Form.Control type="location" placeholder="Location" name="location" onChange={this.handleChange} value={this.state.location} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
        );
    }
}

export default AddContactForm;
