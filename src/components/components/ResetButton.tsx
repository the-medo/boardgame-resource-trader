import { Component } from 'solid-js';
import { useStore } from '../../store/store';

const ResetButton: Component = () => {
  const { store, setStore } = useStore();

  const reset = () => {
    setStore({
      ...store,
      yourResources: store.resourceList.map(() => 0),
    });
  };

  return (
    <button
      onClick={reset}
      title="Reset your resources"
      class="fancy-text  w-8 h-8 rounded-full border-gray-400 bg-white disabled:bg-gray-200 disabled:cursor-not-allowed"
    >
      <h1>X</h1>
    </button>
  );
};

export default ResetButton;
