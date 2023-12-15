import { Component } from 'solid-js';
import styles from './LeftBar.module.css';
import TradeDisplayPanel from '../../components/TradeDisplayPanel';
import ResourceCounters from '../../components/ResourceCounters';
import Result from '../../components/Result';

const LeftBar: Component = () => {
  return (
    <div
      class={`${styles['left-bar']} fixed flex flex-col gap-8 md:flex-row justify-between bottom-0 left-0 lg:w-164 bg-white text-dark-purple m-4 p-6 rounded-md overflow-y-auto right-0 `}
    >
      <div class="flex flex-col gap-8">
        <h1 class="text-center text-2xl">Your resources</h1>
        <ResourceCounters />
        <Result />
      </div>
      <div class="flex flex-col">
        <h1 class="text-center text-2xl">Available trades</h1>
        <TradeDisplayPanel />
      </div>
    </div>
  );
};

export default LeftBar;
