import {
  Cached,
  CacheEntry,
  ResourceArray,
  ResourceCount,
  TradeDefinition,
  TradeDefinitionTuple,
} from './types';
import { globalCache } from '../store/store';

export const transformTradeDefinitionToResourceCount = (
  def: TradeDefinition,
  resources: ResourceArray,
): TradeDefinitionTuple => [resources.map((r) => def.resources[r.id] ?? 0), def.value];

export const keyResourceCount = (rc: ResourceCount): string => rc.join(';');

export const handleMinMax = (value: string | number, min: number, max: number): number => {
  let result = typeof value === 'string' ? (value === '' ? 0 : parseInt(value)) : value;

  if (result > max) {
    result = max;
  } else if (result < min) {
    result = min;
  }

  return result;
};

export const startCompute = (
  availableResources: ResourceCount,
  tradeDefinitions: TradeDefinition[],
  resourceList: ResourceArray,
) => {
  const globalCacheKey = keyResourceCount(availableResources);
  if (globalCache[globalCacheKey]) return globalCache[globalCacheKey]!;

  const cache: Cached = {};
  const transformedTradeDefinitions = tradeDefinitions.map((td) =>
    transformTradeDefinitionToResourceCount(td, resourceList),
  );

  const compute = (
    availableResources: ResourceCount,
    trades: TradeDefinitionTuple[],
    usedTrades: number[],
    value: number,
  ): CacheEntry => {
    const key = keyResourceCount(usedTrades);
    if (cache[key]) return cache[key]!;

    let best = {
      value: value,
      trades: [...usedTrades],
    };

    trades.forEach(([t, v], i) => {
      const [rc, valid] = decreaseResourceCounts(availableResources, t);
      if (valid) {
        const ut = [...usedTrades];
        ut[i]++;
        const result = compute(rc, trades, ut, value + v);
        if (result.value > best.value) {
          best = result;
        }
      }
    });

    // console.log('BEST: ', best);
    cache[key] = best;

    return best;
  };

  const result = compute(
    availableResources,
    transformedTradeDefinitions,
    transformedTradeDefinitions.map(() => 0),
    0,
  );

  globalCache[globalCacheKey] = result;

  return result;
};

export const decreaseResourceCounts = (
  rc1: ResourceCount,
  rc2: ResourceCount,
): [ResourceCount, boolean] => {
  let valid = true;
  const result: ResourceCount = rc1.map((rc, i) => {
    const value = rc - rc2[i];
    if (value < 0) valid = false;
    return value;
  });
  return [result, valid];
};
