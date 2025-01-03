/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { SmolWorker } from '../worker/smol';

function setupOutlineWorker(): (action: any) => Promise<void> {
  const expensiveCalculation = (count: number) => {
    let result = 0;
    const a = count * 100000000;
    for (let i = 0; i < a; i++) {
      result += i;
    }
    return result;
  };

  return async (action: any): Promise<any> => {
    switch (action.type) {
      case 'update':
        {
          const result = expensiveCalculation(action.payload.count);

          return result;
        }
    }
  };
}

export const outlineWorker = new SmolWorker(setupOutlineWorker);

function Worker() {
  const [count, setcount] = useState(0);
  const [valueExspensive, setValueExspensive] = useState(0);

  useEffect(() => {
    outlineWorker.call({
      type: 'update',
      payload: {
        count,
      },
    }).then((r: any) => {
      setValueExspensive(r);
    });
  }, [count]);

  return (
    <>
      <button onClick={() => setcount(count + 1)}>Click {count}</button>
      <br />
      <div>Value Exspensive: {valueExspensive}</div>
    </>
  );
}

export default Worker;
