import React from 'react';
import ContactA from "./ContactA";
import { Container, Row, } from 'react-bootstrap';

const AllContact = (props) => {
    return (
        <Container>
            <Row>
                {props.AllContactData.map((item) => {
                    return <ContactA AllContactData={item}
                                 key={item.id}
                                 UserContact={item}
                                 deleteUser={props.deleteUser}
                                 editUser={props.editUser} />
                })}
            </Row>

        </Container>


    );
}

export default AllContact;
