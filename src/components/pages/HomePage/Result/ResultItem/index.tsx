import * as React from 'react'

import Styled from './styles'

interface Props {
  label: string
  value: React.ReactNode
}

const ResultItem: React.FC<Props> = ({ label, value }) => (
  <Styled className="result-item">
    <span className="result-item__label">
      { label }
      :
    </span>
    <b className="result-item__value">{ value }</b>
  </Styled>
)

export default ResultItem
