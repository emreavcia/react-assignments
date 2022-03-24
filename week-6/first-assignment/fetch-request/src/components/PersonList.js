import { BsTrashFill } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';
import Modal from './Modal';
import { useState } from 'react';

const PersonList = ({ employees, getData, URL, form }) => {

    const [modalData, setModalData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        about: ""

    })

    const getDelete = async (id) => {
        const response = await fetch(URL + "/" + id, {
            method: "DELETE"
        })

        try {
            if (!response.ok) {
                throw Error("Deletion is unsuccessful")
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

    const handlePatch = async (URL, updatedPerson) => {
        console.log(updatedPerson)
        const response = await fetch(URL + "/" + updatedPerson.id, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(updatedPerson)

        })

        try {
            if (!response.ok) {
                throw Error("Update is not handled")
            } else {
                getData()
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    const handleUpdate = (id) => {
        const updateEmployee = employees.find(employee => employee.id === id)
        setModalData(updateEmployee)

    }

    const handleModalData = (event) => {

        const updatedPerson = {
            ...modalData,
            [event.target.name]: event.target.value,
        }
        setModalData(updatedPerson)
    }

    const saveChanges = () => {
        handlePatch(URL, modalData)
    }

    return (
        <>
            <Modal
                saveChanges={saveChanges}
                modalData={modalData}
                form={form}
                handleModalData={handleModalData}
            />
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
                                        <td>
                                            <HiPencil
                                                data-bs-toggle="modal"
                                                data-bs-target="#updateModal"
                                                onClick={() => { handleUpdate(employee.id) }}
                                                role="button"
                                                style={{ color: "green", marginRight: "10px", fontSize: "24px" }}
                                            />
                                            <BsTrashFill
                                                color="red"
                                                role="button"
                                                fontSize="24px"
                                                onClick={() => handleDelete(employee.id)}
                                            />

                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div></>

    )


}

export default PersonList