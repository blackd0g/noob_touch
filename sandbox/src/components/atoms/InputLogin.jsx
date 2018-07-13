import React from 'react'
import { FormControl } from 'react-bootstrap'
import styled from 'styled-components'

const InputText = styled()`

`

const InputLogin = ({ typeData, inputValue, inputName, inputType }) => (
  <FormControl
    bsSize="small"
    type={inputType}
    name={inputName}
    value={inputValue}
    placeholder="Enter text"
    onChange={typeData}
  />
)

export default InputLogin
