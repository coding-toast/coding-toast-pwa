import * as React from 'react';

import { NextSectionStoreContext } from 'stores/NextSectionStore';

const NextSection: React.FC = () => {
  const nextSectionStore = React.useContext(NextSectionStoreContext);
  
  const executeScroll = () => {
    const offset: any = nextSectionStore.ref.current?.offsetParent;
    const navHeight = 77;
    window.scrollTo({
      top: offset?.offsetTop - navHeight,
      behavior: 'smooth'
    });
  };
  return (
    <button type='button' onClick={executeScroll} onKeyPress={executeScroll} tabIndex={0} className='chevronButton'>
      <img src='/next-section.png' alt='Next Section' />
    </button>
  );
};

export default NextSection;
