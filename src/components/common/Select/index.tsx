import crypto from 'crypto'

import * as React from 'react'
import {
  Select as MaterialSelect,
  InputLabel,
} from '@material-ui/core'

import Styled, { StyledMenuItem } from './styles'
import Props from './types'

const Select: React.FC<Props> = ({
  value,
  options,
  onChange,
  label,
}) => {
  const labelId = crypto.randomBytes(5).toString('hex')

  return (
    <Styled>
      {label && (
        <InputLabel id={labelId}>
          { label }
        </InputLabel>
      )}
      <MaterialSelect
        labelId={labelId}
        onChange={onChange}
        value={value}
        displayEmpty
      >
        {options.map((option) => (
          <StyledMenuItem
            key={option.label}
            value={option.value}
          >
            <div className="menu-item">
              { option.label }
              { option.sub && (
                <sub>{ option.sub }</sub>
              )}
            </div>
          </StyledMenuItem>
        ))}
      </MaterialSelect>
    </Styled>
  )
}

export default Select
