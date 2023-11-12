import React from 'react';

export const Highlight = ({ children, fontSize='1.00em' }) => (
    <span style={{ color: '#F28C28', fontWeight: 'bold', fontSize }}>{children}</span>
  );
  
  export const Highlight12 = ({ children}) => (
    <Highlight fontSize='1.2em'>{children}</Highlight>
  );