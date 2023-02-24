import * as React from 'react'
import { Button } from '@material-ui/core'

import { useQueryStore, useWishListStore, useFilterStore } from 'lib/hooks/stores'

import Styled from './styles'
import ResultItem from './ResultItem'

const Result: React.FC = () => {
  const { result, previousQuery } = useQueryStore()
  const { selectedBrand, selectedModel, selectedGeneration, selectedModification } = useFilterStore()
  const { wishListStore } = useWishListStore()

  const onClick = () => {
    if (result) {
      wishListStore.createWishListItem({
        name: previousQuery,
        minCost: result?.minimum,
        maxCost: result?.maximum,
        avgCost: result?.average,
        priority: 1,
        brand: selectedBrand.id,
        model: selectedModel.id || undefined,
        generation: selectedGeneration.id || undefined,
        modification: selectedModification.id || undefined,
      })
    }
  }

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
          <Button
            onClick={onClick}
          >
            Сохранить
          </Button>
        </div>
      )}
    </Styled>
  )
}

export default Result
