import { ResourceArray, ResourceCount, TradeDefinition } from './types';

export const transformTradeDefinitionToResourceCount = (
  def: TradeDefinition,
  resources: ResourceArray,
): [ResourceCount, number] => [resources.map((r) => def.resources[r.id] ?? 0), def.value];

export const keyResourceCount = (rc: ResourceCount): string => rc.join(';');
