import * as React from 'react'

import { useFilterStore } from 'lib/hooks/stores'

import Styled from './styles'

const PreviousSearch: React.FC = () => {
  const {
    filterStore,
    previousCarSearched,
  } = useFilterStore()

  const onClick = () => {
    if (previousCarSearched) {
      filterStore.fillSelectsByPreviousCar(previousCarSearched)
    }
  }

  if (!previousCarSearched) return null

  return (
    <Styled className="previous-search">
      <span className="previous-search__span">
        Вы искали:
      </span>
      <button
        type="button"
        onClick={onClick}
        className="previous-search__button"
      >
        {`
          ${previousCarSearched.brand.name}
          ${previousCarSearched.model?.name || ''}
          ${previousCarSearched.generation?.family || ''}
          ${previousCarSearched.modification?.name || ''}
        `}
      </button>
    </Styled>
  )
}

export default PreviousSearch
