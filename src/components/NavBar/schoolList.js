import React, { useState } from 'react';
import { Paragraph } from './collegeList.js'
import listDetailsHoc from '../listDetailsHoc.js';
function SchoolList(props) {
//   console.log(props.list,"props in studentLisr")
    // const schoolList = props && props.list || [];
    return (
        <div>
                SchoolList 
                <div>
                {props?.displayContent()}
                </div>
        </div>
    )
}

const schoolList = listDetailsHoc(SchoolList,"schoolList")

export default schoolList;