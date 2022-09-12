let initialState= {
    AllContacts: [
        {
            name: "constance",
            phone: "+233 956 789 099",
            location: "Accra",
            id: "1",
          },
          {
            name: "confidence",
            phone: "+234 956 789 099",
            location: "Kumasi",
            id: "2",
          },
          {
            name: "comfort",
            phone: "+235 956 789 099",
            location: "Volta",
            id: "3"
          },
    ],
};
let ContanctReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONCTACT":
      return {...state, AllContacts: [...state.AllContacts, action.payload]}
    default:
      return state;
      
  }
 
};
export default ContanctReducer;