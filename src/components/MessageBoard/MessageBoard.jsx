import React from 'react'
import Table from 'react-bootstrap/Table'

function MessageTable(message) {
    return (
        <>
            <h1>Message Board</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Topic:</th>
                    <th>Posted By:</th>
                    <th>Replies:</th>
                    <th>Date Added:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{message.topic}</td>
                    <td>{message.postedBy.name}</td>
                    <td>{message.replies.length}</td>
                    <td>{message.dateAdded}</td>
                    </tr>
                </tbody>
            </Table>
            </>
    )
}

export default MessageTable;