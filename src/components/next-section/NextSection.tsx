import * as React from 'react';
import NextSectionStyles from './NextSection.module.scss';

const NextSection: React.FC = () => {
  /*
  TODO:
  const nextSectionStore = React.useContext(NextSectionStoreContext)
  const offset: any = nextSectionStore.ref.current?.offsetParent

  const executeScroll = () => {
    window.scrollTo({
      top: offset?.offsetTop - 77,
      behavior: 'smooth'
    })
  }
  */

  return (
    <button type='button' tabIndex={0} className={NextSectionStyles.chevronButton}>
      <img src='/next-section.png' alt='Next Section' />
    </button>
  );
};

export default NextSection;
