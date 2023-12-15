import { Component, For } from 'solid-js';
import { TradeDefinition } from '../../utils/types';
import { useStore } from '../../utils/store';

interface TradeDisplayProps {
  definition: TradeDefinition;
  index: number;
}

const TradeDisplay: Component<TradeDisplayProps> = (props) => {
  const { store } = useStore();

  return (
    <>
      <div class="flex w-full gap-1">
        <div class="flex gap-1 w-1/2 justify-end">
          <For each={store.resourceList}>
            {(resource) => (
              <For each={Array(props.definition.resources[resource.id] ?? 0).fill(null)}>
                {() => <img class="w-8" src={resource.imgUrl} alt={resource.name} />}
              </For>
            )}
          </For>
        </div>
        <div class="flex-row gap-1 w-1/4">
          <h1 class="text-3xl">{props.definition.value}</h1>
        </div>
        <div class="flex-row gap-1 w-1/4">
          <h1 class="text-2xl">
            <For each={Array(store.tradeResults[props.index] ?? 0).fill(null)}>{() => '.'}</For>
          </h1>
        </div>
      </div>
    </>
  );
};

export default TradeDisplay;
