import { useState } from 'react'
import './App.css'

function App() {
const [count, setCount] = useState(0);
  return (
    <div className='container'>
      <div className = 'card '>
        <div className='card-body'>
          <h1>Counter App</h1>
          <div className=''>
            <h2>{count}</h2>
            <button className='btn-inc' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='btn-dec' onClick={() => setCount(count - 1)}>Decrement</button>
            <button className='btn-res' onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
