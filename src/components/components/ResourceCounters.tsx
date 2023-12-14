import { Component, For } from 'solid-js';
import ResourceCounter from './ResourceCounter';
import { useStore } from '../../utils/store';

const ResourceCounters: Component = () => {
  const { store } = useStore();

  return (
    <div class="flex gap-1 justify-between">
      <For each={store.resourceList}>{(resource) => <ResourceCounter resource={resource} />}</For>
    </div>
  );
};

export default ResourceCounters;
