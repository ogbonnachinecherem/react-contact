import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';
import { EditContact } from '../actions/Actions';
import { connect } from 'react-redux';

class EditContactForm extends Component {
    constructor(props){
        super();
        this.state = {
            name:props.UserContact.name,
            phone:props.UserContact.phone,
            location:props.UserContact.location,
            id:props.UserContact.id
        }
    }

    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
           [e.target.name]: e.target.value
        });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        // this.props.editUser(this.state.id,this.state);
        this.props.EditContact(this.state);

        this.setState({
            name:'',
            phone:'',
            location:'',
            
        });
        this.props.closeModal();
        console.log('forms submitted:' ,this.state)
      }

      
    render() {
        return (
            
                <Form onSubmit={this.handleSubmit} style={{ marginTop: '20px' }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
       </Form.Group>

       <Form.Group className='mb3' controlId='formBasicPhone'>
        <Form.Label>Phone:</Form.Label>
        <Form.Control type="tel" placeholder="Telephone" name="phone"  value={this.state.phone} onChange={this.handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Location:</Form.Label>
        <Form.Control type="location" placeholder="Enter Gen" name="location" value={this.state.location} onChange={this.handleChange}/>
      </Form.Group>
            <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        );
    }
}
const mapDispatchToProps = {
  EditContact:EditContact
}
export default connect(null, mapDispatchToProps)(EditContactForm);

// export default EditContactForm;
