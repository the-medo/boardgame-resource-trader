import { Resource, ResourceArray, TradeDefinition } from './types';

import resourceShell from '../public/assets/near-and-far/resource-shell.png';
import resourceHammer from '../public/assets/near-and-far/resource-hammer.png';
import resourceBottledDemon from '../public/assets/near-and-far/resource-bottled-demon.png';
import resourceCrystal from '../public/assets/near-and-far/resource-crystal.png';

const RESOURCE_SHELL: Resource = {
  id: 'shell',
  name: 'Shell',
  imgUrl: resourceShell,
};

const RESOURCE_BOTTLED_DEMON: Resource = {
  id: 'bottled-demon',
  name: 'Bottled demon',
  imgUrl: resourceBottledDemon,
};

const RESOURCE_HAMMER: Resource = {
  id: 'hammer',
  name: 'Hammer',
  imgUrl: resourceHammer,
};

const RESOURCE_CRYSTAL: Resource = {
  id: 'crystal',
  name: 'Crystal',
  imgUrl: resourceCrystal,
};

export const NEAR_AND_FAR_RESOURCES: ResourceArray = [
  RESOURCE_SHELL,
  RESOURCE_HAMMER,
  RESOURCE_BOTTLED_DEMON,
  RESOURCE_CRYSTAL,
];

export const NEAR_AND_FAR_TRADE_DEFINITIONS: TradeDefinition[] = [
  {
    resources: {
      shell: 1,
    },
    value: 1,
  },
  {
    resources: {
      hammer: 1,
    },
    value: 2,
  },
  {
    resources: {
      'bottled-demon': 1,
    },
    value: 2,
  },
  {
    resources: {
      crystal: 1,
    },
    value: 2,
  },
  {
    resources: {
      shell: 3,
    },
    value: 5,
  },
  {
    resources: {
      shell: 1,
      hammer: 2,
    },
    value: 7,
  },
  {
    resources: {
      'bottled-demon': 2,
      hammer: 1,
    },
    value: 9,
  },
  {
    resources: {
      crystal: 3,
    },
    value: 11,
  },
  {
    resources: {
      shell: 1,
      hammer: 1,
      'bottled-demon': 1,
    },
    value: 9,
  },
  {
    resources: {
      shell: 1,
      hammer: 1,
      'bottled-demon': 1,
      crystal: 1,
    },
    value: 12,
  },
  {
    resources: {
      'bottled-demon': 2,
      crystal: 2,
    },
    value: 14,
  },
];
