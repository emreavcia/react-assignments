import React from 'react'

const AddPerson = () => {
    return (
        <div className='col-3 mt-5'>
            <h2 className='bg-primary text-white text-center'>ADD PERSON</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <input autoComplete="on" onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" name="firstname" className="form-control bg-light" aria-describedby="First Name" placeholder='Firstname' />
                </div>
                <div className="mb-3">
                    <input autoComplete="on" onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" name="lastname" className="form-control bg-light" aria-describedby="Last Name" placeholder='Lastname' />
                </div>
                <div className="mb-3">
                    <input autoComplete="on" onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" className="form-control bg-light" aria-describedby="Email" placeholder='Email' />
                </div>
                <div className="mb-3">
                    <input autoComplete="on" onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" className="form-control bg-light" aria-describedby="Password" placeholder='Password' />
                </div>
                <div className="form-floating">
                    <textarea onChange={(e) => setText(e.target.value)} value={text} className="form-control mb-3 bg-light" name="textarea" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div >
    )
}

export default AddPerson;