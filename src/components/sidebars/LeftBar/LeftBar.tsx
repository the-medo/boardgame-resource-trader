import { ParentComponent } from 'solid-js';
import styles from './LeftBar.module.css';

const LeftBar: ParentComponent = ({ children }) => {
  return (
    <div
      class={`${styles['left-bar']} fixed flex flex-col justify-between bottom-0 left-0 w-96 bg-white text-dark-purple m-4 p-4 rounded-md overflow-y-auto`}
    >
Left bar
    </div>
  );
};

export default LeftBar;
