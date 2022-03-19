import React from 'react'
import { BsTrashFill } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';

const PersonList = ({ employees, getData, URL }) => {


    const getDelete = async (id) => {
        const response = await fetch(URL + "/" + id, {
            method: "DELETE"
        })
        try {
            if (!response.ok) {
                throw Error("Deletion is unsuccesful")
            } else {
                getData()
            }
        } catch (error) {
            console.log(error.message)
        }
    }


    const handleDelete = (id) => {

        getDelete(id)
    }

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
                                    <td><HiPencil role="button" style={{ color: "green", marginRight: "10px", fontSize: "24px" }} /><BsTrashFill color="red" role="button" fontSize="24px" onClick={() => handleDelete(employee.id)} /> </td>
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