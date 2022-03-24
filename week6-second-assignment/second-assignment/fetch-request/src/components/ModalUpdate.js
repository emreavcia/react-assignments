import React from 'react'

const Modal = ({ modalData, form, saveChanges, handleModalData }) => {
    return (
        <div className="modal" tabIndex="-1" id="updateModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h2 className='bg-primary text-white text-center'>UPDATE PERSON INFO</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            e.target.reset();
                        }}
                            ref={form}
                        >
                            <div className="mb-3">
                                <input
                                    autoComplete="on"
                                    required type="text"
                                    name="firstName"
                                    className="form-control bg-light"
                                    aria-describedby="First Name"
                                    placeholder='Firstname'
                                    value={modalData.firstName}
                                    onChange={(e) => handleModalData(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    autoComplete="on"
                                    required type="text"
                                    name="lastName"
                                    className="form-control bg-light"
                                    aria-describedby="Last Name"
                                    placeholder='Lastname'
                                    value={modalData.lastName}
                                    onChange={(e) => handleModalData(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <input autoComplete="on"
                                    required type="email"
                                    name="email"
                                    className="form-control bg-light"
                                    aria-describedby="Email"
                                    placeholder='Email'
                                    value={modalData.email}
                                    onChange={(e) => handleModalData(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    autoComplete="on"
                                    required type="password"
                                    name="password"
                                    className="form-control bg-light"
                                    aria-describedby="Password"
                                    placeholder='Password'
                                    value={modalData.password}
                                    onChange={(e) => handleModalData(e)}
                                />
                            </div>
                            <div className="form-floating">
                                <textarea
                                    required
                                    className="form-control mb-3 bg-light"
                                    name="about"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea"
                                    value={modalData.about}
                                    onChange={(e) => handleModalData(e)}
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => saveChanges()}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;