import { v4 as uuid } from "uuid";
let initialState= {
    AllContacts: [
        // {
        //     name: "constance",
        //     phone: "+233 956 789 099",
        //     location: "Accra",
        //     id: uuid(),
        //   },
        //   {
        //     name: "confidence",
        //     phone: "+234 956 789 099",
        //     location: "Kumasi",
        //     id: uuid(),
        //   },
        //   {
        //     name: "comfort",
        //     phone: "+235 956 789 099",
        //     location: "Volta",
        //     id: uuid(),
        //   },
    ],
};
let ContanctReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONCTACT":
      return {...state, AllContacts: action.payload}
      case "EDIT_CONCTACT":
        const updatedContact = state.AllContacts.map((contact) => {
          if (contact.id === action.payload.id){
            return action.payload
          }
          else {return contact}
        })
        return {...state, AllContacts: updatedContact}
        case "DELETE_CONTACT":
          const unDeletedContact = state.AllContacts.filter((contact) => contact.id !== action.payload
            // if (contact.id !== action.payload){
            //   return {...state, AllContacts:  unDeletedContact}
            // }
          );
          return {...state, AllContacts:  unDeletedContact}

        default:
          return state;
      
  }
 
};
export default ContanctReducer;