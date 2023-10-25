import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchVal } from  '../actions/index.js'

export default function Body() {
    const dispatch = useDispatch();

    const data = useSelector(state => state.reducers.searchValueReducer);

    console.log(data,"dataaaaaaa")
    const handleChange = (e) => {
        const payload = e.target.value;
        dispatch(searchVal({type:"SEARCH_VALUE", payload}))
    }
    return (
        <div>

            <p>render body content with functional base approach</p>
            <input onChange={handleChange}/>
            <div>
           <p> updateToReducer:{data.reducerStateUpdated?"True":"false"}</p>
           <p>searchData:{data.searchValue}</p>
            </div>
           
        </div>
    )
}