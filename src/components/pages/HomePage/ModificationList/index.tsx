import * as React from 'react'

import { Modification } from 'api/cars/types'
import { useFilterStore, useQueryStore } from 'lib/hooks/stores'
import Select from 'components/common/Select'
import { transformFuel, transformVolume } from 'lib/utils'

import Styled from './styles'

interface Props {
  list: Modification[]
}

const ModificationList: React.FC<Props> = ({ list }) => {
  const { selectedGenerationModification, filterStore } = useFilterStore()
  const { queryStore } = useQueryStore()

  const onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const modificataion = e.target.value as string
    filterStore.selectModification(modificataion)
    queryStore.resetResult()
  }

  const options = list.map((modification) => ({
    label: `${modification.volume ? transformVolume(modification.volume) : ''} ${transformFuel(modification.fuel)}`,
    value: modification.name,
    sub: modification.powerRange.map((power) => `${power} л.с`).join(' - '),
  }))

  return (
    <Styled>
      <Select
        onChange={onChange}
        value={selectedGenerationModification.name}
        options={options}
        label="Модификация"
      />
    </Styled>
  )
}

export default ModificationList
