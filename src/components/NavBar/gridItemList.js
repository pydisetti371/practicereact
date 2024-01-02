import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function GridItemList() {
    const Navigate = useNavigate();
    const [btnClicked, setBtnClicked] = useState(true);
    let btnClickedVar = false
    const gridItemList = () => {
        console.log("gridItemList")
        // Navigate("/gridLists")
        btnClickedVar = true
        setBtnClicked(false)
    }

    console.log(btnClickedVar, "btnClicked")
    return (
        <div>
            <Box>
                <Grid container rowSpacing={3} columnSpacing={3}>
                    <Grid item xs={8}>
                        <Item>Grid-8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Grid-4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>

                </Grid>

            </Box>
        </div>
    )
}

export default GridItemList