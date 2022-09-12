import React from 'react';
import ContactA from "./ContactA";
import { Container, Row, } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const AllContact = (props) => {

const {AllContacts} = useSelector((state) => {
    return state })

    return (

        <>
            <Container>
                <Row>
                            {AllContacts.map((item) => {
                                return <ContactA AllContactData={item}
                                            key={item.id}
                                            UserContact={item}
                                            deleteUser={props.deleteUser}
                                            editUser={props.editUser} />
                            })}
                </Row>

            </Container>
    </>
    );
}

export default AllContact;
