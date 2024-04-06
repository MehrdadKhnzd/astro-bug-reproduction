import { createSignal, onMount } from 'solid-js';

export default () => {
  const [num, setNum] = createSignal(0);

  const inc = () => setNum((v) => v + 1);

  onMount(() => setNum(20));

  return <button onClick={inc}>{num()}</button>;
};
