import * as React from 'react'
import { observable } from 'mobx'
import { createContext } from 'react'

class RefStore {
  @observable ref: React.RefObject<HTMLDivElement> = React.createRef()
}

export const RefStoreContext = createContext(new RefStore())
