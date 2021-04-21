import * as React from 'react'
import { IconButton, Input } from '@material-ui/core'
import { Search } from '@material-ui/icons'

import { request } from 'api/request'

import Styled from './styles'

const SearchBlock: React.FC = () => {
  const [value, setValue] = React.useState('')

  const sendData = async () => {
    if (value) {
      const data = await request('GET', `get_cars_models/${value}/`)
      console.log({ data })
    }
  }

  return (
    <Styled className="search">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search__input"
        inputProps={{
          'aria-label': 'Search Input',
        }}
      />
      <IconButton
        className="search__button"
        onClick={sendData}
        aria-label="Search Button"
      >
        <Search />
      </IconButton>
    </Styled>
  )
}

export default SearchBlock
