

import React from "react";
import styles from "./CaptionWrapper.module.css";

export const CaptionWrapper = (props) => {
    return (
      <figure style={{textAlign:'center'}}>
        {props.children}
        <figcaption className={styles.figcaption}>{props.caption}</figcaption>
      </figure>
    );
  }
  
  