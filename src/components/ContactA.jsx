import React,{ useState } from 'react';
import {Col,Button } from 'react-bootstrap';
import{Card,Modal} from 'react-bootstrap';
import EditContactForm from './EditContactForm';

const ContactA = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) =>{
    e.preventDefault();
   props.deleteUser(props.AllContactData.id);
  }


    return (

        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Codetrain Student Edit</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          <EditContactForm UserContact={props.UserContact} editUser={props.editUser} closeModal={handleClose}/>
          
        </Modal.Body>
       
      </Modal>
          
                <Col md={4} style={{ marginBottom: "1rem",}}>
                <Card>
      <Card.Body>
        <Card.Title>Name: {props.AllContactData.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Phone: {props.AllContactData.phone}</Card.Subtitle>
        <Card.Text>
         Location: {props.AllContactData.location}
        </Card.Text>
        <Button href="#"  style={{marginLeft: "1rem"}} variant='success'  onClick={handleShow}>Edit</Button>
        <Button href="#"  style={{marginLeft: "1rem"}} variant='danger' onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
    </Col>
              
        </>
    );
}

export default ContactA;
