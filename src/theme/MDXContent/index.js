import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import { MDXProvider } from '@mdx-js/react';
import CustomMDXComponents from '../../theme/CustomMDXComponents';


export default function MDXContentWrapper(props) {
  return (
    <>
    <MDXProvider components={CustomMDXComponents}>
      <MDXContent {...props} />
    </MDXProvider>
    </>
  );
}
