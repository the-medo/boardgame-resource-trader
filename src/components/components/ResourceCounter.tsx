import { Component } from 'solid-js';
import { Resource } from '../../utils/types';
import { useStore } from '../../store/store';
import { handleMinMax } from '../../utils/functions';

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
    const value = handleMinMax(
      e.currentTarget.value,
      store.minResourceCount,
      store.maxResourceCount,
    );

    setStore({
      ...store,
      yourResources: store.resourceList.map((r, i) =>
        r.id === e.currentTarget.name ? value : store.yourResources[i],
      ),
    });
  };

  const increase = () => {
    setStore({
      ...store,
      yourResources: store.resourceList.map((r, i) =>
        r.id === props.resource.id
          ? handleMinMax(store.yourResources[i] + 1, store.minResourceCount, store.maxResourceCount)
          : store.yourResources[i],
      ),
    });
  };

  const descrease = () => {
    setStore({
      ...store,
      yourResources: store.resourceList.map((r, i) =>
        r.id === props.resource.id
          ? handleMinMax(store.yourResources[i] - 1, store.minResourceCount, store.maxResourceCount)
          : store.yourResources[i],
      ),
    });
  };

  return (
    <div class="flex flex-row gap-1 items-center">
      <img class="w-8" src={props.resource.imgUrl} alt={props.resource.name} />
      <div class="flex gap-1 items-center">
        <button
          disabled={store.yourResources[curValueIndex] <= 0}
          onClick={descrease}
          class="fancy-text  w-6 h-6 rounded-full border-gray-400 bg-white disabled:bg-gray-200 disabled:cursor-not-allowed"
        >
          <h1>-</h1>
        </button>
        <input
          onInput={handleInput}
          type="number"
          name={props.resource.id}
          id="count"
          value={store.yourResources[curValueIndex]}
          class="fancy-text mt-1 block w-12 rounded-2xl border-gray-300 shadow-sm focus:border-t-emerald-800 focus:ring-emerald-800 text-center"
        />
        <button
          onClick={increase}
          class="fancy-text  w-6 h-6 rounded-full border-gray-300 bg-white"
        >
          <h1>+</h1>
        </button>
      </div>
    </div>
  );
};

export default ResourceCounter;
