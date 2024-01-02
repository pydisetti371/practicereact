import React from 'react';
import styled from 'styled-components';
import listDetailsHoc from '../listDetailsHoc';
import { Navigate } from 'react-router-dom';
import GridItemList from './gridItemList';
export const Paragraph = styled.p`
margin:20px 20px;
`


class CollegeList extends React.Component {
    constructor(props) {
        super()
        this.state = {
            listType: "",
            displayGrid: false
        }

    }
    componentDidMount() {
        this.setState({
            listType: "collegeList"

        })
    }
     gridItems = () => {
         this.setState({
            displayGrid: true
         })
    }
    render() {
        console.log(this.props, "this.props")
        const { list, displayContent } = this.props;
        const { displayGrid } = this.state
        return (
            <>
                <div>
                    { }
                    CollegeList
                    <div>
                        {list.length && displayContent()}
                    </div>
                    <button onClick={this.gridItems}>GridItems</button>

                </div>
                <div>
                   {displayGrid && <Navigate to="/gridLists"/>}
                </div>
            </>
        )
    }
}
const collegeList = listDetailsHoc(CollegeList, "college");
export default collegeList;