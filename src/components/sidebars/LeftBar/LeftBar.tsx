import { Component } from 'solid-js';
import styles from './LeftBar.module.css';
import TradeDisplayPanel from '../../components/TradeDisplayPanel';
import ResourceCounters from '../../components/ResourceCounters';
import { useStore } from '../../../utils/store';

const LeftBar: Component = () => {
  const { store } = useStore();

  return (
    <div
      class={`${styles['left-bar']} fixed flex flex-col justify-between bottom-0 left-0 w-96 bg-white text-dark-purple m-4 p-6 rounded-md overflow-y-auto`}
    >
      <h1 class="text-center text-2xl">Available trades</h1>
      <TradeDisplayPanel />
      {JSON.stringify(store.yourResources)}
      <ResourceCounters />
    </div>
  );
};

export default LeftBar;
