export const AddContact =(newContact)=>{
    return{
      type:"ADD_CONCTACT",
      payload:newContact
    }
  
  }
  export const EditContact =(updatedContact)=>{
    return{
      type:"EDIT_CONCTACT",
      payload:updatedContact
    }
  
  }
  export const DeleteContact = (id) =>{
    return {
      type: "DELETE_CONTACT",
      payload: id
    }
  }