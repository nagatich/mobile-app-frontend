import * as React from 'react'

import Loader from 'components/common/Loader'
import { useFilterStore, useQueryStore } from 'lib/hooks/stores'

import Styled from './styles'
import CarList from './CarList'
import CarModelList from './CarModelList'
import ModelGenerationList from './ModelGenerationList'
import ModelGenerationModificationList from './ModelGenerationModificationList'
import SearchInput from './SearchInput'
import Result from './Result'

const HomePage: React.FC = () => {
  const {
    filterStore,
    isLoading: appStoreIsLoading,
    carList,
    carsModelList,
    modelGenerationList,
    generationModificationList,
  } = useFilterStore()

  const { isLoading: queryStoreIsLoading } = useQueryStore()

  React.useEffect(() => {
    filterStore.getCarsList()
  }, [filterStore])

  if (appStoreIsLoading || queryStoreIsLoading) {
    return <Loader />
  }

  return (
    <Styled>
      <CarList list={carList} />
      <CarModelList list={carsModelList} />
      <ModelGenerationList list={modelGenerationList} />
      <ModelGenerationModificationList list={generationModificationList} />
      <SearchInput />
      <Result />
    </Styled>
  )
}

export default HomePage
