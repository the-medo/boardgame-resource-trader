import { createStore } from 'solid-js/store';
import { Cached, ResourceArray, ResourceCount, TradeDefinition } from '../utils/types';
import { NEAR_AND_FAR_RESOURCES, NEAR_AND_FAR_TRADE_DEFINITIONS } from '../utils/near-and-far';

export type TraderStore = {
  resourceList: ResourceArray;
  yourResources: ResourceCount;
  tradeDefinitions: TradeDefinition[];
  tradeResults: number[];
  totalResult: number;
  minResourceCount: number;
  maxResourceCount: number;
};

const [store, setStore] = createStore<TraderStore>({
  resourceList: NEAR_AND_FAR_RESOURCES,
  yourResources: NEAR_AND_FAR_RESOURCES.map(() => 0),
  tradeDefinitions: NEAR_AND_FAR_TRADE_DEFINITIONS,
  tradeResults: NEAR_AND_FAR_TRADE_DEFINITIONS.map(() => 0),
  totalResult: 0,
  minResourceCount: 0,
  maxResourceCount: 20,
});

export const useStore = () => ({ store, setStore });

export const globalCache: Cached = {};
