import * as React from 'react'
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
      <div className="search__input">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="search__button"
        onClick={sendData}
      >
        <Search />
      </button>
    </Styled>
  )
}

export default SearchBlock
