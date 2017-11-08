/**
*
* Card
*
*/

import React from 'react';
import { CARD_TITLE_LENGTH } from '../../_shared/constants';
import * as $ from 'jQuery';

import styles from './styles.css';

function Card({details, hoveredCard}) {

  let imgClasses = '';

  let title = details.title.length > CARD_TITLE_LENGTH
    ? details.title.slice(0,CARD_TITLE_LENGTH) + '...'
    : details.title; 
  
  return (
    <div className={`${styles.card} card`} onMouseEnter={hoveredCard}>
      <div className={styles.cardHeader}>
        <span>
          {title}
        </span>
      </div>
      <div className={`${styles.imageContainer} image-container fade-in-top-bottom`}>
        <img src={details.link} className={details.height > details.width ? styles.wideImage : styles.tallImage} />
      </div>
    </div>
  );
}

export default Card;
