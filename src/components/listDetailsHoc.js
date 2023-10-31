import React, { Component } from 'react';
const listDetailsHoc = (WrappedComponent, type) => {
    class Details extends Component {
        constructor(props) {
            super()
            this.state = {
                SOrC: []
            }
        }
        componentDidMount() {
            if (type == "college") {
                this.setState({
                    SOrC: [{
                        number: 1,
                        estaBlished: 1993,
                        college: "Sri Chaitnya Jr College",
                        name: "revanth"
                    },
                    {
                        number: 2,
                        estaBlished: 1993,
                        college: "Sri Chaitnya Jr College",
                        name: "Mahesh"
                    }]
                })
            }
            else {
                this.setState({
                    SOrC: [{
                        number: 1,
                        age: 26,
                        school: "Geethanjali",
                        name: "Revanth"
                    },
                    {
                        number: 2,
                        age: 26,
                        school: "Geethanjali",
                        name: "Madhan"
                    }]
                })
            }
        }

        displayContent = () => {
            console.log(this.state.SOrC)
            const { SOrC } = this.state
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
            const { SOrC } = this.state;
            return (

                <WrappedComponent
                    list={SOrC}
                    displayContent={this.displayContent}
                />
            )
        }

    }
    return Details
}
export default listDetailsHoc;