import styles from './page.module.css';
import City from '@/components/city/city.js';
import Counter from '@/components/counter/counter.js';

export default function Home() {
  const cities = [
    { name: 'New York', country: 'USA' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Paris', country: 'France' },
    { name: 'London', country: 'UK' },
    { name: 'Berlin', country: 'Germany' },
  ];

  const cityList = cities.map((city, index) => (
    <City name={city.name} country={city.country} key={city.name} />
  ));

  return (
    <div className={styles.page}>
      <h1>City List</h1>
      <div>{cityList}</div>

      <br />

      <Counter />
    </div>
  );
}
