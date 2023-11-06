import React, { useEffect } from 'react';
import listDetailsHoc from '../listDetailsHoc.js';
function SchoolList(props) {
    return (
        <div>
            SchoolList
            <div>
                {props?.displayContent("school")}
            </div>
        </div>
    )
}

const schoolList = listDetailsHoc(SchoolList)

export default schoolList;