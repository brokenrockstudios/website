import React from 'react';
import DocItem from '@theme-original/DocItem';
import AdmonitionTypes from '@theme/Admonition/Types';
import { MDXProvider } from '@mdx-js/react';

const components = {
  HLText: AdmonitionTypes.HLText,
}

export default function DocItemWrapper(props) {
  return (
    <>
    <MDXProvider components={components}>
      <DocItem {...props} />
    </MDXProvider>
    </>
  );
}
