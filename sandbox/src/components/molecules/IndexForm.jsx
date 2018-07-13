import React from 'react'
import axios from 'axios'
import { FormGroup, FormControl } from 'react-bootstrap'
import LabelLogin from '../atoms/LabelLogin'
import InputLogin from '../atoms/InputLogin'
import ButtonLogin from '../atoms/ButtonLogin'

class IndexForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: '',
      password: ''
    }
  }

  getValidationState(stateData) {
    const length = this.state[stateData]
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
    return null;
  }

  handleInput(e) {
    this.state[e.target.name] = e.target.value
    this.forceUpdate()
  }

  handleSubmit() {
    axios.get('http://localhost:4000/login')
    .then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <form>
        <FormGroup
          validationState={this.getValidationState('username')}
        >
          <LabelLogin title="Username" />
          <InputLogin
            inputName="username"
            inputType="text"
            inputValue={this.state.username}
            typeData={(this.handleInput)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          validationState={this.getValidationState('password')}
        >
          <LabelLogin title="Password" />
          <InputLogin
            inputName="password"
            inputType="password"
            inputValue={this.state.password}
            typeData={(this.handleInput)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <ButtonLogin type="submit" submitData={this.handleSubmit} />
      </form>

    )
  }
}

export default IndexForm
