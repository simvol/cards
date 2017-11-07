/**
*
* Dashboard
*
*/

import React from 'react';
import Card from '../Card';
import { IMG_FORMATS } from '../../_shared/constants';

import styles from './styles.css';

function Dashboard({cards, hoveredCard}) {

  let fewCards = cards
    .splice(0,50)
    .map((card, index) => {
      let format = card.link.slice(card.link.lastIndexOf('.') + 1, card.link.length).toUpperCase();
console.log(format);
      if (IMG_FORMATS.indexOf(format) !== -1) {  
        return <Card details={card} key={index}/>;
      }
    });

  return (
    <div className={styles.dashboard}>
      {cards[0] && 
         fewCards}
    </div>
  );
}

export default Dashboard;
