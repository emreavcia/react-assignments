import React, { useState } from 'react'

const AddPerson = ({ employees, getData, URL }) => {

    const [newEployee, setNewEmployee] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        about: ""
    })

    const handleChange = (event) => {
        const id = employees.length ? employees[employees.length - 1].id + 1 : 1
        setNewEmployee({
            ...newEployee,
            id,
            [event.target.name]: event.target.value,
        })

    }

    const postData = async () => {

        const response = await fetch(URL, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEployee)
        })
        try {
            if (!response.ok) {
                throw Error("The post is unsuccessful")
            } else {
                getData()
            }
        } catch (err) {
            console.log(err.message)
        }


    }
    const handleClick = () => {
        postData()
    }



    return (
        <div className='col-3 mt-5'>
            <h2 className='bg-primary text-white text-center'>ADD PERSON</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                    <input autoComplete="on" onChange={handleChange} type="text" name="firstName" className="form-control bg-light" aria-describedby="First Name" placeholder='Firstname' />
                </div>
                <div className="mb-3">
                    <input autoComplete="on" onChange={handleChange} type="text" name="lastName" className="form-control bg-light" aria-describedby="Last Name" placeholder='Lastname' />
                </div>
                <div className="mb-3">
                    <input autoComplete="on" onChange={handleChange} type="email" name="email" className="form-control bg-light" aria-describedby="Email" placeholder='Email' />
                </div>
                <div className="mb-3">
                    <input autoComplete="on" onChange={handleChange} type="password" name="password" className="form-control bg-light" aria-describedby="Password" placeholder='Password' />
                </div>
                <div className="form-floating">
                    <textarea onChange={handleChange} className="form-control mb-3 bg-light" name="about" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
                <button type="submit" onClick={handleClick} className="btn btn-primary">Add</button>
            </form>
        </div >
    )
}

export default AddPerson