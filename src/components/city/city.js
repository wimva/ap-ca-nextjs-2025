'use client';

import styles from './city.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function City(props) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <Link
        href={`/cities/${props.slug}`}
        className={`${styles.city} ${isVisible ? styles.visible : styles.hidden}`}
      >
        {props.name}
      </Link>
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
