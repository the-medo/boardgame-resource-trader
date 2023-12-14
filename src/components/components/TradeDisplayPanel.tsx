import { Component, For } from 'solid-js';
import TradeDisplay from './TradeDisplay';
import { useStore } from '../../utils/store';

const TradeDisplayPanel: Component = () => {
  const { store } = useStore();

  return (
    <div class="flex flex-col gap-1">
      <For each={store.tradeDefinitions}>
        {(definition) => <TradeDisplay definition={definition} />}
      </For>
    </div>
  );
};

export default TradeDisplayPanel;
