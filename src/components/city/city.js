'use client';

import styles from './city.module.css';
import { useState } from 'react';

export default function City(props) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h2
        className={`${styles.city} ${isVisible ? styles.visible : styles.hidden}`}
      >
        {props.name}
      </h2>
      <p>{props.country}</p>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? 'Hide' : 'Show'} Name
      </button>
    </div>
  );
}
