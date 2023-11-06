import React, { Component } from 'react';
import { Navigate } from 'react-router-dom'
import styled from 'styled-components';
import schoolList from './schoolList';

const StyledDiv = styled.div`
  margin-right: 10px
`
const StyledListUl = styled.ul`
  display: inline-flex;
  list-style-type: none;
`

const StyledListLi = styled.li`
  padding: 10px
`
class NavBarDetails extends Component {
    constructor(props) {
        super()
        this.state = {
            collegeList: false,
            schoolList: false
        }

    }

    collgeList = () => {
        this.setState({
            collegeList: true
        })

    }

    schoolList = () => {
        this.setState({
             schoolList: true
        })


    }
    render() {
        const { collegeList,schoolList } = this.state;
        return (
            <>
                <StyledDiv>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">

                            <div>
                                <StyledListUl>
                                    <StyledListLi>
                                        <a className="nav-link active" href="#" onClick={this.collgeList}>College List</a>
                                    </StyledListLi>
                                    <StyledListLi>
                                        <a className="nav-link" href="#" onClick={this.schoolList}>School List</a>
                                    </StyledListLi>
                                    <StyledListLi>
                                        <a className="nav-link" href="#">Teachers List</a>
                                    </StyledListLi>
                                    {/* <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li> */}
                                </StyledListUl>
                            </div>
                        </div>
                    </nav>

                </StyledDiv>
                <div>
                    {collegeList && <Navigate to="/collegeList" />}
                    {schoolList && <Navigate to="/schoolList" />}
                </div>
            </>
        )
    }
}



export default NavBarDetails;