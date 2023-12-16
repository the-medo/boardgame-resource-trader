import { Component, For } from 'solid-js';
import TradeDisplay from './TradeDisplay';
import { useStore } from '../../store/store';

const TradeDisplayPanel: Component = () => {
  const { store } = useStore();

  return (
    <div class="flex flex-col gap-1">
      <For each={store.tradeDefinitions}>
        {(definition, index) => <TradeDisplay definition={definition} index={index()} />}
      </For>
    </div>
  );
};

export default TradeDisplayPanel;
