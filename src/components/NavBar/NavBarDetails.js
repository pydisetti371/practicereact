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
            schoolList: false,
            callbackPage: false
        }

    }

    collgeList = () => {
        console.log("collegeList")
        this.setState({
            collegeList: true
        })

    }

    schoolList = () => {
        console.log("school list", this.props)
        this.setState({
             schoolList: true
        })


    }
    render() {
        const { collegeList,schoolList,callbackPage } = this.state;
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
                                    <StyledListLi>
                                        <a className='nav-link' href="#" onClick={() => this.setState({ callbackPage: true})}>Practice callback</a>
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
                    {callbackPage && <Navigate to="/callback" />}
                </div>
            </>
        )
    }
}



export default NavBarDetails;