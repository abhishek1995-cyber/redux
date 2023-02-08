import React from "react";
import { connect } from 'react-redux';
import { updateMax } from '../store/action'

function Max(props){

    function handleClick(max){
      props.dispatch(updateMax(max))
    }
    return (
        <>
        <button className={props.max === 15 ? 'active': ''}
         onClick={() => handleClick(15)}>15</button>
        <button className={props.max === 50 ? 'active': ''}
        onClick={() => handleClick(50)}>50</button>
        <button className={props.max === 100 ? 'active': ''}
        onClick={() => handleClick(100)}>100</button>
        </>
    )
}


function mapStatetoProps(state){
    return {
        max: state.max
    }
}

export default connect(mapStatetoProps)(Max)