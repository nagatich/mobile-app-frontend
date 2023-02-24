import * as React from 'react'

import Loader from 'components/common/Loader'
import { useFilterStore, useQueryStore } from 'lib/hooks/stores'

import Styled from './styles'
import BrandList from './BrandList'
import ModelList from './ModelList'
import GenerationList from './GenerationList'
import ModificationList from './ModificationList'
import SearchInput from './SearchInput'
import Result from './Result'
import PreviousSearch from './PreviousSearch'

const HomePage: React.FC = () => {
  const {
    filterStore,
    isLoading: appStoreIsLoading,
    brands,
    models,
    generations,
    modifications,
  } = useFilterStore()

  const { isLoading: queryStoreIsLoading } = useQueryStore()

  React.useEffect(() => {
    filterStore.getBrandsWithLoading()
    filterStore.getPreviousCarSearched({})
  }, [filterStore])

  // React.useEffect(() => {
  //   const socket = new WebSocket('ws://localhost:8000/ws/notifications/')
  //   socket.onmessage = (event) => {
  //     const { data } = event
  //     console.log(JSON.parse(data))
  //   }
  // }, [])

  if (appStoreIsLoading || queryStoreIsLoading) {
    return <Loader />
  }

  return (
    <Styled>
      <BrandList list={brands} />
      <ModelList list={models} />
      <GenerationList list={generations} />
      <ModificationList list={modifications} />
      <PreviousSearch />
      <SearchInput />
      <Result />
    </Styled>
  )
}

export default HomePage
