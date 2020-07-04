import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface ICodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<ICodeBlockProps> = (props) => {
  return (
    <div>
      <SyntaxHighlighter language={props.language} style={atomDark} showLineNumbers>
        {props.value}
      </SyntaxHighlighter>
      <br />
    </div>
  );
};

export default CodeBlock;
