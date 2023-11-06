import React, { Component } from 'react';
import { connect } from 'react-redux';
const listDetailsHoc = (WrappedComponent) => {
    return class Details extends Component {
        constructor(props) {
            super()
            this.state = {
                SOrC: []
            }
        }

        displayContent = (type) => {
            const { collegeList, schoolList } = this.props;
            let SOrC = [];
            if (type === "college") {
                SOrC = collegeList
            } else {
                SOrC = schoolList
            }
            return (
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>age:</th>
                                <th scope='col'>number:</th>
                                <th scope='col'>school / College</th>
                                <th scope='col'>Name:</th>
                            </tr>
                        </thead>
                        {SOrC && SOrC.length && SOrC.map((item, index) => {
                            // console.log(item,"item")
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <th scope='row'>{item.number}</th>
                                        <td>{item.age}</td>
                                        <td>{item.number}</td>
                                        <td>{item.school !== "" && item.school || item.college || null}</td>
                                        <td>{item.name}</td>
                                    </tr>
                                </tbody>

                            )
                        })}

                    </table>

                </div >
            )
        }
        render() {
            return (
                <>
                    <WrappedComponent
                        // list={SOrC}
                        displayContent={this.displayContent}
                    />
                </>

            )
        }

    }

}

function mapStateToProps(state) {
    const data = state;

    if (data !== undefined) {

        const { collegeList, schoolList } = state.list
        return {
            collegeList,
            schoolList
        }
    }

}
// export default connect(mapStateToProps)(listDetailsHoc(WrappedComponent));
export default (WrappedComponent) => connect(mapStateToProps)(listDetailsHoc(WrappedComponent))