import React from 'react'

const HomeTable = ({ data }) => {

    return (
        <div className="table">
            <table>
                <thead>

                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Amount</th>
                    </tr>


                </thead>

                <tbody>
                    {data.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >

        </div >

    )
}

export default HomeTable