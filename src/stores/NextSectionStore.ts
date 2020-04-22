import * as React from 'react'
import { observable } from 'mobx'
import { createContext } from 'react'

class NextSectionStore {
  @observable ref: React.RefObject<HTMLDivElement> = React.createRef()
}

export const NextSectionStoreContext = createContext(new NextSectionStore())
