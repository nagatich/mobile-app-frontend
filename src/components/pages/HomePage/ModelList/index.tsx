import * as React from 'react'

import { Model } from 'api/cars/types'
import { useFilterStore, useQueryStore } from 'lib/hooks/stores'
import Select from 'components/common/Select'

import Styled from './styles'

interface Props {
  list: Model[]
}

const ModelList: React.FC<Props> = ({ list }) => {
  const { filterStore, selectedModel, selectedBrand } = useFilterStore()
  const { queryStore } = useQueryStore()

  const onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const name = e.target.value as string
    filterStore.selectModel(name)
    filterStore.getGenerationsWithLoading(selectedBrand.name, name)
    queryStore.resetResult()
  }

  const options = list.map((model) => ({
    label: model.name,
    value: model.name,
  }))

  return (
    <Styled>
      <Select
        onChange={onChange}
        value={selectedModel.name}
        options={options}
        label="Модель"
      />
    </Styled>
  )
}

export default ModelList
