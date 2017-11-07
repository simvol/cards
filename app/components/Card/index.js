/**
*
* Card
*
*/

import React from 'react';


import styles from './styles.css';

function Card({details, hoveredCard}) {

  let imgClasses = '';

  return (
    <div className={styles.card} onMouseEnter={hoveredCard}>
      <div className={styles.cardHeader}>
        <span>
          {details.title}
        </span>
      </div>
      <div className={styles.imageContainer}>
        {/* <img src={details.link} />  */}
        <img src={details.link} className={details.height > details.width ? styles.wideImage : styles.tallImage} />
      </div>
    </div>
  );
}

export default Card;
