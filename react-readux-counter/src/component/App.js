import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/action';
import Max from './max';
import { Header } from './header';
import Steps from './steps';
import './style.css'
function App(props){

  return ( 
  <div className='container'>
  <Header />
  <h1>{props.count}</h1>
  <div className='btn'>
  <button onClick={() => props.dispatch(increment())}>Increment</button>
  <button onClick={() => props.dispatch(decrement())}>Decrement</button>
  <button onClick={() => props.dispatch(reset())}>Reset</button>
  
   <h2>Steps</h2>
  <Steps />
  <h2>Max-value</h2>
  <Max />
  </div>
  </div>
  )
}

function getCount(state){
  return {
    count: state.value 
  }
}

export default connect(getCount)(App)