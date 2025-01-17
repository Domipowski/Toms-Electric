import React from 'react';
import { Form, FormGroup, FormFeedback, Input, InputGroup, Label, PopoverHeader, PopoverBody, Button, UncontrolledPopover } from 'reactstrap'; 

class Inputs extends React.Component {
  constructor() {
    super(); 
    this.state = {
      name: '', 
      phoneNumber: '', 
      email: '', 
      request: '', 
      preference: '', 
      isInvalid: false
    }; 
  }

  handleInputChangePhone = (e) => {
    const value = e.target.value;
  
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, '');
  
    if (cleaned.length <= 10) {
      const formatted = this.formatPhoneNumber(cleaned);
      this.setState({ phoneNumber: formatted, isInvalid: false });
    } 
  };
  
  formatPhoneNumber = (value) => {
    // Format the number as (123) 456-7890
    const match = value.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const formatted = [
        match[1] ? `(${match[1]}` : '',
        match[2] ? `) ${match[2]}` : '',
        match[3] ? `-${match[3]}` : '',
      ]
        .join('')
        .trim();
      return formatted;
    }
    return value;
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }; 

  handleRadioChange = (e) => {
    this.setState({ preference: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); 

    if (this.state.phoneNumber.length !== 14) { // Prevent form submission; Show error message 
      this.setState({ isInvalid: true });
      return; 
    } 

    // Submit the request to the backend if everything goes through 
    let name = e.target.name.value; 
    let phone = e.target.phone.value; 
    let email = e.target.email.value; 
    let request = e.target.request.value; 
    let preference = e.target.preference.value; 

    this.contact(name, phone, email, request, preference); 

    // Reset Form 
    this.setState({ name: '', 
                    phoneNumber: '', 
                    email: '', 
                    request: '', 
                    preference: '', 
                    isInvalid: false }); 
  }; 

  contact = (name, phone, email, request, preference) => {
    console.log(name + "\n" + phone + "\n" + email + "\n" + request + "\n" + preference); 
  }; 

  render() {
    return(
      <Form onSubmit = {this.handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            required
            autoComplete="name"
            id="name"
            name="name"
            placeholder="Enter your full name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <InputGroup>
          <Input
            required
            autoComplete="tel-national"
            id="phone"
            name="phone"
            placeholder="(123) 456-7890"
            type="tel"
            value={this.state.phoneNumber}
            onChange={this.handleInputChangePhone}
            invalid={this.state.isInvalid}
          />
            <FormFeedback>
              Invalid Phone Number
            </FormFeedback>
            </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            required
            autoComplete="email"
            id="email"
            name="email"
            placeholder="user@example.com"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleText">Describe your Request and Please Include your General Location</Label>
          <Input
            required
            id="exampleText"
            name="request"
            type="textarea"
            placeholder="Describe any services you wish to be done"
            value={this.state.request}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        
        
        <Label>Contact Preference
          <FormGroup>
            <FormGroup check>
              <Input
                name="preference"
                type="radio"
                id="emailRadio"
                value="Email"
                checked={this.state.preference === 'Email'} 
                onChange={this.handleRadioChange}
              />
              {' '}
              <Label check for="emailRadio">Email</Label>
            </FormGroup>

            <FormGroup check>
              <Input
                name="preference"
                type="radio"
                id="textRadio"
                value="Text"
                checked={this.state.preference === 'Text'} 
                onChange={this.handleRadioChange}
              />
              {' '}
              <Label check for="textRadio">Text</Label>
            </FormGroup>

            <FormGroup check>
              <Input
                required
                name="preference"
                type="radio"
                id="callRadio"
                value="Call"
                checked={this.state.preference === 'Call'} 
                onChange={this.handleRadioChange}
              />
              {' '}
              <Label check for="callRadio">Call</Label>
            </FormGroup>
          </FormGroup>
        </Label>

        <div>
          <Button
            id="privacyNotice"
            type="button"
            color="secondary"
          >
            Privacy Notice
          </Button>
          <UncontrolledPopover
            flip
            target="privacyNotice"
          >
            <PopoverHeader>
              Privacy Notice
            </PopoverHeader>
            <PopoverBody>
            The information you provide will not be stored anywhere and will only be used to contact you regarding your inquiry. 
            </PopoverBody>
          </UncontrolledPopover>
        </div>
        
        <Button 
          className="mt-2 block" 
          type="submit" 
          color="warning"
        >
          Submit
        </Button>
      </Form>
    ); 
  }
}

export default Inputs; 