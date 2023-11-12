import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

const Highlight = ({children}) => {
    return (
    <span style={{ color: '#F28C28', fontWeight: 'bold', fontSize: '1.2em' }}>{children}</span>
    );
}   

{/* <div style={{border: 'solid red', padding: 10}}>
<h5 style={{color: 'blue', fontSize: 30}}>{props.title}</h5>
<div>{props.children}</div>
</div> */}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'HL': Highlight,
  HLText: Highlight,
};

export default AdmonitionTypes;
