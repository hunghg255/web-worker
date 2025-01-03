import { useEffect, useState } from 'react';

const expensiveCalculation = (count: number) => {
  let result = 0;
  const a = count * 100000000;
  for (let i = 0; i < a; i++) {
    result += i;
  }
  return result;
};

function NoWorker() {
  const [count, setcount] = useState(0);
  const [valueExspensive, setValueExspensive] = useState(0);

  useEffect(() => {
    const v = expensiveCalculation(count);
    setValueExspensive(v);
  }, [count]);

  return (
    <>
      <button onClick={() => setcount(count + 1)}>Click {count}</button>
      <br />
      <div>Value Exspensive: {valueExspensive}</div>
    </>
  );
}

export default NoWorker;
