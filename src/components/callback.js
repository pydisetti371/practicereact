import React,{useState, useCallback} from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import CallBackTesting from './callbackTesting';

const StyledDiv = styled.div`
padding: 20px
`

function Callback() {
    const [value,setValue] = useState(0);
    const [plusValueUpdated, setPlusValueUpdated] = useState('');

    const decrement = () => {
        setValue(value - 1)
        setPlusValueUpdated("")
    }

    const valueUpdated = (val) => {
        setPlusValueUpdated(val)
    }
    console.log(plusValueUpdated,"plusValueUpdated")
    // empty scenario one
    // yes scenario one
    
    const increment = useCallback(() => {
        // setPlusValueUpdated("yes")
        setValue(value + 1)
    },[plusValueUpdated])

    console.log(increment,"<-increment")

    return (
        <StyledDiv >
            {/* <Box component="section" sx={{ p: 2, border: '1px dashed grey', boxSizing: "content-box", width: "100%", height: "250%" }}>
                Display content inside box
            </Box> */}
            <p>Counter App: {value}</p>
            <CallBackTesting increment={increment} valueUpdated={valueUpdated}/> {" " + " "}
            {/* <button onClick={increment}>+</button> */}
            <button onClick={decrement}>-</button>
            
        </StyledDiv>
    )
}

export default Callback;