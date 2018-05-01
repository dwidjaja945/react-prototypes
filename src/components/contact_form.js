import React, { Component } from 'react';
import Field from './field.js';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        console.log("event.target.value: ", event.target.value);

        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.add(this.state);
        console.log('handleSubmit', this.state);
    }

    render() {
        const { firstName, lastName, phone, email } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type='text' value={firstName} onChange={this.handleInputChange} />
                <Field name="lastName" label="Last Name" type='text' value={lastName} onChange={this.handleInputChange} />
                <Field name="phone" label="Phone" type='text' value={phone} onChange={this.handleInputChange} />
                <Field name="email" label="Email" type='text' value={email} onChange={this.handleInputChange} />
                <button>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm;

// RESUME ON FEATURE SET 5
