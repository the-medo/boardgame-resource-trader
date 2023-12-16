import { Component, For } from 'solid-js';
import ResourceCounter from './ResourceCounter';
import { useStore } from '../../store/store';

const ResourceCounters: Component = () => {
  const { store } = useStore();

  return (
    <div class="flex flex-col gap-4 items-center justify-center">
      <For each={store.resourceList}>{(resource) => <ResourceCounter resource={resource} />}</For>
    </div>
  );
};

export default ResourceCounters;
