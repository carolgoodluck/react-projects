import React from 'react'
import { ACTIONS } from './App'

// Clicking Operation symbols
export default function OperationButton({className, dispatch, operation}) {
  return (
    <button className={className} onClick={()=>{dispatch({type: ACTIONS.CHOOSE_OPERATION, payload:{operation}})}}>{operation}</button>
  )
}
