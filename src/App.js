import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { Action } from './states/reducers/index';


function App() {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch()
  return (
    <>
    <h1>React Redux</h1>
    <div style={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <h1>{curState}</h1>
      <div>
        <button onClick={() => dispatch(Action(10))}>Do some Action</button>
      </div>
    </div>
    </>
  )
}

export default App