import * as React from 'react'

import { Generation } from 'api/cars/'
import { useFilterStore } from 'lib/hooks/stores'
import Select from 'components/common/Select'

import Styled from './styles'

interface Props {
  list: Generation[]
}

const ModelGenerationList: React.FC<Props> = ({ list }) => {
  const { filterStore, selectedGeneration } = useFilterStore()

  const onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const generation = e.target.value as string
    filterStore.selectGeneration(generation)
    filterStore.getGenerationModifications()
  }

  const options = list.map((generation) => {
    const [from, to] = generation.productionPeriod

    return {
      label: generation.family.map((item) => `${item}`).join(' '),
      value: generation.name,
      sub: `${from.split('-')[0]} - ${to?.split('-')[0] || 'н.в.'}`,
    }
  })

  return (
    <Styled>
      <Select
        onChange={onChange}
        value={selectedGeneration.name}
        options={options}
        label="Поколение"
      />
    </Styled>
  )
}

export default ModelGenerationList
