import { Component, createEffect } from 'solid-js';
import { useStore } from '../../store/store';
import { startCompute } from '../../utils/functions';
import ResetButton from './ResetButton';

const Result: Component = () => {
  const { store, setStore } = useStore();

  createEffect(() => {
    const result = startCompute(store.yourResources, store.tradeDefinitions, store.resourceList);
    setStore('totalResult', result.value);
    setStore('tradeResults', result.trades);
  });

  return (
    <div class="flex gap-4 items-center justify-center w-full">
      <ResetButton />
      <div class="flex items-center justify-center w-24 h-24 border-4 border-emerald-800 backdrop-blur bg-white opacity-90 rounded-full">
        <h1 class="text-center text-3xl">{store.totalResult}</h1>
      </div>
    </div>
  );
};

export default Result;
