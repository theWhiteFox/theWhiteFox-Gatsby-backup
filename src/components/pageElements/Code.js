import styled from "styled-components";
import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { copyToClipboard } from "../../utils/copy-to-clipboard";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

const Pre = styled.pre`
  position: relative;
  text-align: left;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;
  margin: 1em auto;
  font-family: CodeFont;
  font-size: 1.2rem;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.5;
  font-family: MyFont2;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 0;
  border-radius: 3px;
  margin: 0.25em;
  opacity: 0.3;
  font-family: MyFont2;
  &:hover {
    opacity: 1;
  }
`;

export const Code = ({ codeString, language, ...props }) => {
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }

  const handleClick = () => {
    copyToClipboard(codeString);
  };

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
