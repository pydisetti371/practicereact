import React from 'react';
import styled from 'styled-components';
import listDetailsHoc from '../listDetailsHoc';
export const Paragraph = styled.p`
margin:20px 20px;
`
class CollegeList extends React.Component {
    constructor(props) {
        super()
    }
  
    render() {
        const { displayContent } = this.props;
        return (
            <div>
                {/* <Paragraph>CollegeList</Paragraph> */}
                CollegeList
                <div>
                {displayContent("college")}
                </div>
               

            </div>
        )
    }
}
const collegeList = listDetailsHoc(CollegeList);
export default collegeList;