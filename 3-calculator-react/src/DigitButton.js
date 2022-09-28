import React from 'react'
import {ACTIONS} from './App'   // ACTIONS非默认暴露，一定要用花括号引起来

// Clicking digits
export default function DigitButton({dispatch, digit}) {
  return (
    <button onClick={()=>{dispatch({type:ACTIONS.ADD_DIGIT, payload:{digit}})}}>{digit}</button>
  )
}
