import React from 'react';
import { connect} from 'react-redux';
import './style.css';
import { updateStep } from '../store/action'

function Steps(props){

    function handleClick(step){
        props.dispatch(updateStep(step))
    }
    return (
    <>
    <div>
        <button className={props.step === 5 ? 'active': ''} 
        onClick={() => handleClick(5)}>5</button>
        <button className={props.step === 10 ? 'active': ''} 
        onClick={() => handleClick(10)}>10</button>
        <button className={props.step === 15 ? 'active': ''} 
        onClick={() => handleClick(15)}>15</button>
    </div>
    </>
    )
}

function mapStatetoProps(state){
    return {
        step: state.step
    }
}

export default connect(mapStatetoProps)(Steps)