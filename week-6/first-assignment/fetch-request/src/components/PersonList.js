import React from 'react'

const PersonList = ({ employees }) => {
    return (
        <div className='col-9 mt-5'>
            <h2 className='bg-primary text-white text-center'>PERSON LIST</h2>
            <table className="table table-borderless">
                <thead>
                    <tr className='bg-light'>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">About</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => {
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.password}</td>
                                    <td>{employee.about}</td>
                                    <td><button className='bg-primary text-white'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PersonList