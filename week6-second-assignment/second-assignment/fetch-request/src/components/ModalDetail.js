import React from 'react'

const ModalDetail = ({ employeeDetail }) => {
    console.log(employeeDetail)
    return (
        <div className="modal" tabIndex="-1" id="modalDetail">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h2 className='bg-primary text-white text-center'>PERSON DETAIL</h2>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Firstname: {employeeDetail.firstName}</li>
                            <li className="list-group-item">Lastname: {employeeDetail.lastName}</li>
                            <li className="list-group-item">Email: {employeeDetail.email}</li>
                            <li className="list-group-item">Password: {employeeDetail.password}</li>
                            <li className="list-group-item">About: {employeeDetail.about}</li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDetail;