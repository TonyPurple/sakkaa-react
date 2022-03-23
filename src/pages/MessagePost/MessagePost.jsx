import React, { Component } from 'react';
import './MessagePost.css'

class MessagePost extends Component {
    state = { 
        invalidForm: true,
        formData: {
            topic: '',
            postedBy: '',
            replies: [],
            dateAdded: '',
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleMessagePost(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    render() { 
        return ( 
            <>
            <div className="MessagePost">
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="row">
                    <div className="input-field col s12">
                        <input name="topic" id="topic" type="text" className="active" value={this.state.formData.topic} onChange={this.handleChange} required />
                        <label htmlFor="topic">Topic</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <input name="dateAdded" id="date-added" type="date" className="active" value={this.state.formData.dateAdded} onChange={this.handleChange} required />
                        <label htmlFor="dateAdded">Date Added</label>
                    </div>
                    </div>
                    <button
                    type="submit"
                    className="btn red"
                    disabled={this.state.invalidForm}
                    ><i className="material-icons left"></i>
                                    Post Message
                                </button>
                </form>
                </div>
            </>
         );
    }
}

export default MessagePost;