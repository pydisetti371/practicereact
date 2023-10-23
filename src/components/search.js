import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { searchValue } from '../actions/counterActions';

function Search() {
    const dispatch = useDispatch();
    const enteredVal = useSelector((state) => state?.state?.enterVal)
    console.log(enteredVal,"enteredsearchValue")
     const handleChange = (e) => {
        console.log(e.target.value)
        let payload = e.target.value
        dispatch(searchValue({ type: "ENTER_VALUE", payload }))
    }
    return (
        <>
            <p> Search Component value:{enteredVal.value}</p>
            <input onChange={handleChange} />
        </>
    )
}

export default Search