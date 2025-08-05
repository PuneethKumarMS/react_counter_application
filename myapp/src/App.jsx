import { useState } from 'react'

function CounterApp() {

  const [count, setCount] = useState(0);

  const [step, setStep] = useState(1);

  const increase = () => {
    setCount(count + step);
  };

  const decrease = () => {
    setCount(count - step < 0 ? 0: count - step);
  };

  const reset = () => {
    setCount(0);
    setStep(1);
  };

  return(
    <div className='counter-container'>
      <h1>React Counter</h1>
      <h2>Count:{count}</h2>

      <label >Step Value:</label>

      <input
      type='number'
      value={step}
      onChange={(e) => setStep(parseInt(e.target.value))}
      min='1'
      />
      <br />

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

}
export default CounterApp;