import React from 'react'
import MessageTable from '../../components/MessageBoard/MessageBoard'
import Table from 'react-bootstrap/Table'
import './MessageBoard.css'

function MessageBoard(props, message) {
    return (
        <>
            <div className="message-board-div">
                <h1 id="logo-1">Message Board</h1>
                <a className="btn" href="/messages/add">Post Message</a>
                <Table striped bordered hover responsive variant="dark">
                    <thead>
                        <tr>
                        <th>Topic:</th>
                        <th>Posted By:</th>
                        <th>Replies:</th>
                        <th>Date Added:</th>
                        <th>Details</th>
                        </tr>
                    </thead>
                    {props.messages.reverse().map(message =>
                        <MessageTable 
                            key={message._id}
                            handleDeleteMessage={props.handleDeleteMessage}
                            message={message}
                            user={props.user}
                        />
                    )}
                </Table>    
            </div>
        </>
    )
}


export default MessageBoard;