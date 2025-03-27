'use client';

import { cities } from '@/data/cities';
import { useParams } from 'next/navigation';

export default function CityDetaim() {
  const params = useParams();
  const city = cities.find((city) => city.slug === params.slug);
  console.log('city: ' + city);
  return <div>{city.name}</div>;
}
