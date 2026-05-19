import { images } from './images';

export interface Spacecraft {
  id: string;
  name: string;
  class: string;
  capacity: number;
  topSpeed: string;
  description: string;
  image: string;
  features: string[];
}

export const fleet: Spacecraft[] = [
  {
    id: 'starliner-v',
    name: 'Starliner V',
    class: 'Orbital Cruiser',
    capacity: 12,
    topSpeed: '28,000 km/h',
    description: 'Our flagship vessel for orbital tourism. Features expansive windows and luxury zero-g suites.',
    image: images.fleet.starlinerV,
    features: ['Panoramic Cupola', 'Zero-G Lounge', 'Gourmet Galley']
  },
  {
    id: 'hephaestus',
    name: 'Hephaestus',
    class: 'Interplanetary Transport',
    capacity: 100,
    topSpeed: '100,000 km/h',
    description: 'Built for the long haul to Mars. Features artificial gravity rings and advanced radiation shielding.',
    image: images.fleet.hephaestus,
    features: ['Artificial Gravity', 'Hydroponic Gardens', 'Cinema & Theatre']
  },
  {
    id: 'lunar-shuttle',
    name: 'Artemis Express',
    class: 'Lunar Lander',
    capacity: 24,
    topSpeed: '39,000 km/h',
    description: 'The reliable workhorse for Earth-Moon transit, offering unparalleled comfort for the 3-day journey.',
    image: images.fleet.lunarShuttle,
    features: ['Private Cabins', 'Observation Deck', 'Medical Bay']
  }
];
