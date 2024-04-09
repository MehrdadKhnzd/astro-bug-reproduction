import { type Component, createSignal, onMount } from 'solid-js';

const Btn: Component<{ initialNum: number; }> = (props) => {
  const [num, setNum] = createSignal(props.initialNum);

  const inc = () => setNum((v) => v + 1);

  // onMount(() => setNum(20));

  return <button onClick={inc}>{num()}</button>;
};

export default Btn;
