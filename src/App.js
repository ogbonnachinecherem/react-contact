
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import AllContact from './components/AllContact';
import AddContactForm from "./components/AddContactForm";
import {AddContact} from "./actions/Actions";
import { db } from './firebase/Config';
import { connect } from 'react-redux';
import {collection, orderBy, query, onSnapshot } from "firebase/firestore";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // AllContacts: [
      //   // {
      //   //   name: "constance",
      //   //   phone: "+233 956 789 099",
      //   //   location: "Accra",
      //   //   id: "1",
      //   // },
      //   // {
      //   //   name: "confidence",
      //   //   phone: "+234 956 789 099",
      //   //   location: "Kumasi",
      //   //   id: "2",
      //   // },
      //   // {
      //   //   name: "comfort",
      //   //   phone: "+235 956 789 099",
      //   //   location: "Volta",
      //   //   id: "3"
      //   // },
      // ]
    }
  }
  
  
  componentDidMount() {
    const q = query(collection(db, "newContacts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const contacts = [];
      querySnapshot.forEach((doc) => {
          contacts.push(doc.data());
      });
      this.props.AddContact((contacts))
      console.log(contacts);
    },[]);
          
      }

  // addNewContact = ( AllContact) => {
  //   AllContact.id = Math.random().toString();
  //   this.setState({
  //     AllContacts: [...this.state.AllContacts,  AllContact]
  //   })
  // }
  // deleteUser = (id) => {
  //   let undeletedUser = this.state.AllContacts.filter( AllContacts =>  AllContacts.id !== id);
  // this.setState({
  //     AllContacts: undeletedUser
  //   })
  // }
  // editUser = (id, updatedUser) => {
  //   this.setState({
  //     AllContacts: this.state.AllContacts.map( AllContacts =>  AllContacts.id === id ? updatedUser :  AllContacts)
  //   })
  // }
  render() {
    return (
      <Container style={{marginTop: "3rem"}}>
        <Row>
          <Col md={4}>
            <AddContactForm 
            //addContact={this.addNewContact} 
            />
          </Col>

          <Col md={8}>
            <AllContact
            // AllContactData={this.state.AllContacts} deleteUser={this.deleteUser} editUser={this.editUser} 
             />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatch = {
  AddContact,
}

export default connect(null,mapDispatch)( App); 

