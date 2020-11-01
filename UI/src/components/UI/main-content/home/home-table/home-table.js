import React, { Fragment} from 'react'

const HomeTable = ({data }) => {

    let table = (
        <Fragment>
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((transaction) => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.type}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Fragment>
    )
    return (
        <div className="table">
            <table>
                {table}
            </table >

        </div >

    )
}

export default HomeTable