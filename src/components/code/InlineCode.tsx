import * as React from 'react';

interface IInlineCodeProps {
  value: string;
}

const InlineCode: React.FC<IInlineCodeProps> = (props) => {
  return (
    <code
      className='px-2 py-1'
      style={{
        color: '#c5c8c6',
        backgroundColor: '#333',
        textShadow: 'text-shadow:0 1px rgba(0, 0, 0, 0.3)',
        background: '#1d1f21',
        borderRadius: '0.3em'
      }}
    >
      {props.value}
    </code>
  );
};

export default InlineCode;
