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
        inputProps={{
          'aria-label': 'Query Search Input',
        }}
      />
      <IconButton
        onClick={onClick}
        aria-label="Query Search Button"
      >
        <Search />
      </IconButton>
    </Styled>
  )
}

export default SearchInput
