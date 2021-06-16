export interface HouseInt {
  name: string;
  image: string;
  banner: string;
  description: string;
  head: string;
  colour: string;
}

export const houses: HouseInt[] = [
  {
    name: 'Joe',
    image: 'Joe.png',
    banner: 'JoeBanner.png',
    description:
      'Joe is completely fueled by carbs and promises ramen to all his supporters.',
    head: 'sand-worm',
    colour: '#930318',
  }
];
