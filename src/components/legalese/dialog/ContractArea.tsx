import * as React from 'react';

const ContractArea: React.FC = ({ children }) => (
  <div style={{ maxHeight: '70vh' }} className='overflow-auto'>
    {children}
  </div>
);

export default ContractArea;
