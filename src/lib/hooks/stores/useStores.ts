import * as React from 'react'
import { MobXProviderContext } from 'mobx-react'

import stores from 'stores'

export const useStores = (): typeof stores => React.useContext(MobXProviderContext) as typeof stores
