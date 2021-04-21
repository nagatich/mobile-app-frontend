import * as React from 'react'

import { Brand } from 'api/cars/types'
import { useFilterStore, useQueryStore } from 'lib/hooks/stores'
import Select from 'components/common/Select'

import Styled from './styles'

interface Props {
  list: Brand[]
}

const BrandList: React.FC<Props> = ({ list }) => {
  const { filterStore, selectedBrand } = useFilterStore()
  const { queryStore } = useQueryStore()

  const onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const name = e.target.value as string
    filterStore.selectBrand(name)
    filterStore.getModelsWithLoading(name)
    queryStore.resetResult()
  }

  const options = list.map((car) => ({
    label: car.name,
    value: car.name,
  }))

  return (
    <Styled>
      <Select
        onChange={onChange}
        value={selectedBrand.name}
        options={options}
        label="Бренд"
      />
    </Styled>
  )
}

export default BrandList
