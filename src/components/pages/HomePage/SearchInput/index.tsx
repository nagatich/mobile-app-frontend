import * as React from 'react'
import { Input, IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'

import { useQueryStore } from 'lib/hooks/stores'

import Styled from './styles'

const SearchInput: React.FC = () => {
  const {
    queryStore,
    q,
  } = useQueryStore()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    queryStore.setQ(value)
  }

  const onClick = () => {
    queryStore.query()
  }

  return (
    <Styled>
      <Input
        value={q}
        onChange={onChange}
      />
      <IconButton
        onClick={onClick}
      >
        <Search />
      </IconButton>
    </Styled>
  )
}

export default SearchInput
