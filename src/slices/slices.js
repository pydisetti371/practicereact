import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collegeList: [{
        number: 1,
        estaBlished: 1993,
        college: "Sri Chaitnya Jr College",
        name: "revanth"
    },
    {
        number: 2,
        estaBlished: 1993,
        college: "Sri Chaitnya Jr College",
        name: "Mahesh"
    }],
    schoolList: [{
        number: 1,
        age: 26,
        school: "Geethanjali",
        name: "Revanth"
    },
    {
        number: 2,
        age: 26,
        school: "Geethanjali",
        name: "Madhan"
    }]
}

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers:{
        collegeDetails:  (state) => {
             return state
        }
         
    }

})

export const {collegeDetails} = listSlice.actions; // action dispatch
export default listSlice.reducer // export reducers