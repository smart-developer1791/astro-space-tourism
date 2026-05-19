import { images } from './images';

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  distance: string;
  travelTime: string;
  price: string;
  image: string;
  color: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: 'luna',
    name: 'Luna Base Alpha',
    tagline: 'The closest getaway',
    description: 'Experience the ultimate luxury at our lunar resort. Enjoy 1/6th gravity sports, Earth-view dining, and pristine crater excursions. Perfect for first-time space travelers.',
    distance: '384,400 km',
    travelTime: '3 Days',
    price: 'From $250,000',
    image: images.destinations.luna,
    color: 'from-gray-300 to-gray-500',
    highlights: ['Sea of Tranquility tours', 'Low-G sports arena', 'Earthrise viewing lounge']
  },
  {
    id: 'mars',
    name: 'Mars Colony Prime',
    tagline: 'The red frontier',
    description: 'A journey for the true explorer. Walk the rust-colored dunes of Mars, visit the Olympus Mons base camp, and witness the mesmerizing blue sunsets of the Red Planet.',
    distance: '225 million km',
    travelTime: '7 Months',
    price: 'From $1.5M',
    image: images.destinations.mars,
    color: 'from-orange-500 to-red-700',
    highlights: ['Valles Marineris expedition', 'Blue sunset viewing', 'Underground biodomes']
  },
  {
    id: 'orbital',
    name: 'Aurora Station',
    tagline: 'Luxury in low earth orbit',
    description: 'Float above the world in our state-of-the-art orbital hotel. Experience 16 sunrises a day while floating in zero-G luxury suites with panoramic cupola windows.',
    distance: '400 km',
    travelTime: '12 Hours',
    price: 'From $150,000',
    image: images.destinations.orbital,
    color: 'from-blue-400 to-indigo-600',
    highlights: ['Zero-G spa', '360° Cupola observatory', '16 sunrises per day']
  }
];
