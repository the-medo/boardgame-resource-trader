import { Component } from 'solid-js';
import { Resource } from '../../utils/types';
import { useStore } from '../../utils/store';

interface ResourceCounterProps {
  resource: Resource;
}

const ResourceCounter: Component<ResourceCounterProps> = (props) => {
  const { store, setStore } = useStore();

  const curValueIndex = store.resourceList.findIndex((r) => r.id === props.resource.id);

  const handleInput = (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    },
  ) => {
    const value = e.currentTarget.value;
    const finalValue = value === '' ? 0 : parseInt(value);

    setStore({
      ...store,
      yourResources: store.resourceList.map((r, i) =>
        r.id === e.currentTarget.name ? finalValue : store.yourResources[i],
      ),
    });
  };

  return (
    <div class="flex flex-col gap-1 items-center">
      <img class="w-8" src={props.resource.imgUrl} alt={props.resource.name} />
      <input
        onInput={handleInput}
        type="number"
        max={20}
        name={props.resource.id}
        id="count"
        value={store.yourResources[curValueIndex]}
        class="fancy-text mt-1 block w-16 rounded-2xl border-gray-300 shadow-sm focus:border-t-emerald-800 focus:ring-emerald-800 text-center"
      />
    </div>
  );
};

export default ResourceCounter;
