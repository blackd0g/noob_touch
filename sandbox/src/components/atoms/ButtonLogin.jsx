import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

const ButtonLogin = ({ submitData }) => (
  <Button bsStyle="primary" bsSize="large" onClick={submitData}>
    Go
  </Button>
)

export default ButtonLogin
