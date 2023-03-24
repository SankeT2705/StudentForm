import React, { useState } from 'react'

const Form = ({ list }) => {
    const [name1, setName] = useState('')
    const [email1, setEmail] = useState('')
    const [mobile1, setMobile] = useState('')
    const [branch1, setBranch] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        list({ name: name1, email: email1, mobile: mobile1, branch: branch1 })
        setName('')
        setEmail('')
        setMobile('')
        setBranch('')
    }
    return (
        <div className="container mx-auto my-auto text-center bg-secondary mt-2 " style={{ maxWwidth: "600px" }}>
            <h1 className="mx-auto my-auto mb-3 text-white">Student Registration Form</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" value={name1} onChange={
                    (e) => { setName(e.target.value) }
                } placeholder="Enter Name" />
                <label for="floatingInput">Student Name</label>
            </div>
            <div className="form-floating  mb-3">
                <input type="email" className="form-control" id="floatingPassword" value={email1} onChange={
                    (e) => { setEmail(e.target.value) }
                } placeholder="Student Email" />
                <label for="floatingPassword">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="mobile" value={mobile1} className="form-control" id="floatingInput" onChange={
                    (e) => { setMobile(e.target.value) }
                } placeholder="Enter Mobile" />
                <label for="floatingInput">Mobile</label>
            </div>
            <div className="form-floating  mb-3">
                <input type="text" value={branch1} className="form-control" id="floatingPassword" onChange={
                    (e) => { setBranch(e.target.value) }
                } placeholder="Enter Branch" />
                <label for="floatingPassword">Branch</label>
            </div>
            <div className="container text-center">
                <input type="button" onClick={onSubmit} className="btn btn-info mb-3" value="ADD" />
            </div>
        </div>
    )
}

export default Form