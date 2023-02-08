import { createStore } from 'redux';

function counterReducer(
    state = {value:0,  step: 1, max: null},
    action
    ) {
   switch(action.type){
    case "increment" :
        if(state.max && (state.value + state.step) >= state.max + 1) {
            return state;
        }
        return { ...state, value : state.value + state.step }
    case "decrement" :
    return { ...state, value : state.value - state.step}
    case "changestep" :
        return { ...state, step : action.payload}
    case "changemax" :
            return { ...state, max : action.payload}
    case "reset" :
    return { ...state, value : 0, step: 1, max: null }
    default:
        return state
   }
}

let store = createStore(counterReducer);

export default store