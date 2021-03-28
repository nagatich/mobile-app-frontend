import * as React from 'react'

import { useQueryStore } from 'lib/hooks/stores'

import Styled from './styles'
import ResultItem from './ResultItem'

const Result: React.FC = () => {
  const { result, previousQuery } = useQueryStore()

  return (
    <Styled className="result-block">
      <p className="result-block__query">{ previousQuery }</p>
      {result && (
        <div className="result-block-results">
          <ResultItem
            label="Минимальная цена"
            value={result.minimum}
          />
          <ResultItem
            label="Максимальная цена"
            value={result.maximum}
          />
          <ResultItem
            label="Средняя цена"
            value={result.average}
          />
        </div>
      )}
    </Styled>
  )
}

export default Result
