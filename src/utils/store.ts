import { createStore } from 'solid-js/store';
import { ResourceArray, ResourceCount, TradeDefinition } from './types';
import { NEAR_AND_FAR_RESOURCES, NEAR_AND_FAR_TRADE_DEFINITIONS } from './near-and-far';

export type TraderStore = {
  resourceList: ResourceArray;
  tradeDefinitions: TradeDefinition[];
  yourResources: ResourceCount;
};

const [store, setStore] = createStore<TraderStore>({
  tradeDefinitions: NEAR_AND_FAR_TRADE_DEFINITIONS,
  resourceList: NEAR_AND_FAR_RESOURCES,
  yourResources: NEAR_AND_FAR_RESOURCES.map(() => 0),
});

export const useStore = () => ({ store, setStore });
