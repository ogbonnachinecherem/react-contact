// import React from 'react';
// import {Container, Row} from 'react-bootstrap'
// import ContactA from './ContactA';

// const AllContact = (props) => {
//     return (
//         <div>
//             <Container>
//                 <Row>
//                     {
//                     props.AllContactData.map((item,index) => {
//                         return <ContactA AllContactInfo={item} key ={index}/>
//                     })
//                     }
                    
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default AllContact;

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
