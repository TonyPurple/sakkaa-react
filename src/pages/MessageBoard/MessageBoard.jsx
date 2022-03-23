import React from 'react'
import MessageTable from '../../components/MessageBoard/MessageBoard';
import './MessageBoard.css'

function MessageBoard(props) {
    return (
        <>
            <div className='message-board'>
                {props.messages.map(message =>
                    <MessageTable 
                        key={message._id}
                        message={message}
                        user={props.user}
                    />
                )}
            </div>
            <a href="/messages/add">Add Message</a>
        </>
    )
}

export default MessageBoard;