import * as React from 'react'

import { Generation } from 'api/cars/types'
import { useFilterStore, useQueryStore } from 'lib/hooks/stores'
import Select from 'components/common/Select'

import Styled from './styles'

interface Props {
  list: Generation[]
}

const GenerationList: React.FC<Props> = ({ list }) => {
  const { filterStore, selectedGeneration, selectedBrand, selectedModel } = useFilterStore()
  const { queryStore } = useQueryStore()

  const onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const generation = e.target.value as string
    filterStore.selectGeneration(generation)
    filterStore.getModificationsWithLoading(selectedBrand.name, selectedModel.name, generation)
    queryStore.resetResult()
  }

  const options = list.map((generation) => {
    const [from, to] = generation.productionPeriod
    const family = generation.family.length > 0 ? generation.family.map((item) => `${item}`).join(' ') : generation.name

    return {
      label: family,
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

export default GenerationList
