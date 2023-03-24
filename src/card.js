import React from 'react'

function Card({ name, email, mobile, branch }) {
    return (
        <div className="mx-auto my-auto mt-2 bg-dark text-white rounded" id="data" style={{ maxWidth: "600px" }}>
            <div className="card mx-auto my-auto  mt-2">
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-info text-white">Name: {name} </li>
                    <li className="list-group-item bg-info text-white">Email: {email}</li>
                    <li className="list-group-item bg-info text-white">Mobile: {mobile} </li>
                    <li className="list-group-item bg-info text-white">Branch: {branch} </li>
                </ul>
            </div>
        </div>
    )
}

export default Card