const AddPerson = ({ getData, URL, handleChange, newEployee }) => {

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
            <form onSubmit={(e) => {
                e.preventDefault()
                e.target.reset();
            }}

            >
                <div className="mb-3">
                    <input
                        autoComplete="on"
                        onChange={handleChange}
                        required type="text"
                        name="firstName"
                        className="form-control bg-light"
                        aria-describedby="First Name"
                        placeholder='Firstname'
                    />
                </div>
                <div className="mb-3">
                    <input
                        autoComplete="on"
                        onChange={handleChange}
                        required type="text"
                        name="lastName"
                        className="form-control bg-light"
                        aria-describedby="Last Name"
                        placeholder='Lastname'
                    />
                </div>
                <div className="mb-3">
                    <input autoComplete="on"
                        onChange={handleChange}
                        required type="email"
                        name="email"
                        className="form-control bg-light"
                        aria-describedby="Email"
                        placeholder='Email'
                    />
                </div>
                <div className="mb-3">
                    <input
                        autoComplete="on"
                        onChange={handleChange}
                        required type="password"
                        name="password"
                        className="form-control bg-light"
                        aria-describedby="Password"
                        placeholder='Password'
                    />
                </div>
                <div className="form-floating">
                    <textarea
                        onChange={handleChange}
                        required
                        className="form-control mb-3 bg-light"
                        name="about"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    onClick={handleClick}
                    className="btn btn-primary"
                >Add</button>
            </form>
        </div >
    )
}

export default AddPerson