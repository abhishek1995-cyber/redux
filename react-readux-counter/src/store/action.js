
export function increment(){
    return {
      type: 'increment',
    }
  }
  
 export function decrement(){
    return {
      type: 'decrement',
    }
  }
  
export  function reset(){
    return {
      type: 'reset',
    }
  }

  export  function updateStep(step){
    return {
      type: 'changestep',
      payload: step,
    }
  }

  export  function updateMax(max){
    return {
      type: 'changemax',
      payload: max,
    }
  }