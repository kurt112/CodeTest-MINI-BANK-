import React from 'react'
const HomeTable = ({ data }) => {

    return (
        <div className="table">
            <table>
                <thead>

                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Type</th>
                    </tr>


                </thead>

                <tbody>
                    {
                        data.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.date}</td>
                                    <td>{data.amount}</td>
                                    <td>{data.type}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table >

        </div >

    )
}

export default HomeTable