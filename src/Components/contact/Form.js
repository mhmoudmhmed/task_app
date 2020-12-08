import React from 'react';
import Button from '@material-ui/core/Button';
import MuiPhoneNumber from "material-ui-phone-number";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import './Form.css';

class Form extends React.Component {
  state = {
    formData: {
      name:'',
      email: '',
      phone: '',
      message:''
    },
    submitted: false,
  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({
        formData: {
          name:'',
          email: '',
          phone: '',
          message:''
        },
        submitted: false
      }), 2000);
    });
  }

  handlePhoneChange = (value) => {
    if (value) {
      this.setState({ phone: value });
    }
  }

  render() {
    const { formData, submitted } = this.state;
    return (
      <ValidatorForm
        ref="form"
        className="form"
        onSubmit={this.handleSubmit}
      >
        <h2> Get in Touch With Us </h2>

        <br />

        <TextValidator
          className="inputStyle"
          label="Name"
          onChange={this.handleChange}
          name="name"
          value={formData.name}
          validators={['required']}
          errorMessages={['this field is required', 'name is not valid']}
        />
        
        <br />

        <TextValidator
          className="inputStyle"
          label="Email"
          onChange={this.handleChange}
          name="email"
          value={formData.email}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
        />

        <br />

        <MuiPhoneNumber
          name="phone"
          className="inputStyle"
          label="Phone Number"
          data-cy="user-phone"
          defaultCountry={"eg"}
          value={formData.phone}
          onChange={this.handlePhoneChange}
        />
        
        <br />

        <TextValidator
          className="inputStyle"
          label="Your Message"
          onChange={this.handleChange}
          name="message"
          value={formData.message}
          validators={['required']}
          errorMessages={['this field is required']}
        />

        <br />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={submitted}
        >
          {
            (submitted && <span className="success">Your form is submitted!</span>)
            || (!submitted && 'Submit')
          }
        </Button>
      </ValidatorForm>
    );
  }
};

export default Form;