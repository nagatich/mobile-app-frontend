import * as React from 'react'

import { Car } from 'api/cars/'
import { useFilterStore } from 'lib/hooks/stores'
import Select from 'components/common/Select'

import Styled from './styles'

interface Props {
  list: Car[]
}

const CarList: React.FC<Props> = ({ list }) => {
  const { filterStore, selectedCar } = useFilterStore()

  const onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const name = e.target.value as string
    filterStore.selectCar(name)
    filterStore.getCarsModels()
  }

  const options = list.map((car) => ({
    label: car.name,
    value: car.name,
  }))

  return (
    <Styled>
      <Select
        onChange={onChange}
        value={selectedCar.name}
        options={options}
        label="Бренд"
      />
    </Styled>
  )
}

export default CarList
