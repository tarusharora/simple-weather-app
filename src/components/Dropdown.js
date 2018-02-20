import React from 'react'
import { Dropdown as SemanticDropdown } from 'semantic-ui-react'

const Dropdown = ({placeholder, options, value, onChange}) => (
  <SemanticDropdown
    fluid
    options={options}
    onChange={onChange}
    search
    selection
    placeholder={placeholder}
    value={value}
  />
)

export default Dropdown
