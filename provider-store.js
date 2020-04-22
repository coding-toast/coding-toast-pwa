import React from 'react'
import { Provider } from 'mobx-react'
import RefStore from './src/stores/RefStore'

export default ({ element }) => <Provider RefStore={RefStore}>{element}</Provider>
