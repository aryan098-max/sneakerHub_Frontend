import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name:"user",
    initialState:null, 
    reducers:{

        addUser:(state,action)=>{
            return action.payload
        },

        removeUser:()=>{
            return null;
        }
    }

})


// returning actions
export const {addUser, removeUser} = userSlice.actions;

// returning reducer 
export default userSlice.reducer;

