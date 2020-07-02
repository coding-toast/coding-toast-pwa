import * as React from 'react';
import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class NextSectionStore {
  ref: React.RefObject<HTMLDivElement> = React.createRef();
}

decorate(NextSectionStore, {
  ref: observable
});

export const NextSectionStoreContext = createContext(new NextSectionStore());