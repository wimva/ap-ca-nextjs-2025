import styles from './page.module.css';
import City from '@/components/city/city.js';
import Counter from '@/components/counter/counter.js';
import { cities } from '@/data/cities';

export default function Home() {
  const cityList = cities.map((city, index) => (
    <City
      slug={city.slug}
      name={city.name}
      country={city.country}
      key={city.name}
    />
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
