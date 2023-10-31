import React from 'react';
import styled from 'styled-components';
import listDetailsHoc from '../listDetailsHoc';
export const Paragraph = styled.p`
margin:20px 20px;
`


class CollegeList extends React.Component {
    constructor(props) {
        super()
        this.state = {
            listType: ""
        }

    }
    componentDidMount() {
        this.setState({
            listType: "collegeList"

        })
    }
    render() {
        console.log(this.props, "this.props")
        const { list, displayContent } = this.props;
        return (
            <div>
                {/* <Paragraph>CollegeList</Paragraph> */}
                CollegeList
                <div>
                {list.length && displayContent()}
                </div>
               

            </div>
        )
    }
}
const collegeList = listDetailsHoc(CollegeList, "college");
export default collegeList;