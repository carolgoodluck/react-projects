import {React, useReducer} from 'react'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'
import './App.css'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DEL_DIGIT: 'del-digit',
  EVALUATE: 'evaluate'
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0
})
// Remain the original format of decimal
// Format only integer
function formatOperand(operand){
  if (operand == null) return
  const [integer, decimal] = operand.split('.')
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}


// state = {
//   previousOperand,
//   operation,
//   currentOperand,
//   overwrite
// }

// manage all the states
function reducer(state, action){
  const {type, payload} = action
  const {currentOperand, previousOperand, operation} = state
  switch(type){
    case ACTIONS.ADD_DIGIT: 
    // After pressing = , replace operand if directly clicking digit instead of appending it
      if (state.overwrite){
        return {...state, currentOperand:payload.digit, overwrite:false}
      }

      if (currentOperand === '0' && payload.digit === '0')
        return state;
      if (payload.digit === '.' && currentOperand.includes('.'))
        return state;
      return {...state, currentOperand:`${currentOperand || ''}${payload.digit}`} // 在现有的操作数后持续加数字

    // Operation
    // First click: Move current output to previous section, and update current operand by new digits
    // Not first: caculate first before moving
    case ACTIONS.CHOOSE_OPERATION:
      if (currentOperand == null && previousOperand == null){
        return state
      }

      // Use the most replace operation if continusly clicking different operations
      // eg: +-, use -
      if (currentOperand == null){
        return {...state, operation:payload.operation}
      }

      // If no previous operand, let previous = current and current = null
      if (previousOperand == null){
        return {...state, operation:payload.operation, previousOperand:state.currentOperand, currentOperand:null}
      }

      return {...state, previousOperand: evaluate(currentOperand, previousOperand, payload.operation), operation:payload.operation, currentOperand:null}

    case ACTIONS.CLEAR:
      return {};
    
    case ACTIONS.DEL_DIGIT:

      if (!currentOperand){
        return state;
      }

      // Delete output if = is clicked just now
      // !!! remember to change the overwrite value
      if (state.overwrite)
        return {...state, currentOperand:null, overwrite:false};
      
      // Change current operand to null instead of empty string avoid situations like '' + '' 
      // (only operation symbol in the middle of output)
      if (currentOperand.length === 1){
        return {...state, currentOperand:null}
      }

      return {...state, currentOperand:currentOperand.slice(0,-1)}

    case ACTIONS.EVALUATE:
      // Avoid situation like 15 +=, remain its state
      if (operation == null || currentOperand == null || previousOperand == null){
        return state;
      }
      
      // After presenting the result, replace it if directly pressing digits
      // Start a new round
      return {...state, overwrite:true, currentOperand:evaluate(currentOperand, previousOperand, state.operation), previousOperand:null, operation:null}
    
    default: return;
  }
}

function evaluate(currentOperand, previousOperand, operation){
  const pre = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(pre) || isNaN(current)) return '';
  let computation = '';
  switch (operation){
    case '+': computation = pre + current; break;
    case '-': computation = pre - current; break;
    case '*': computation = pre * current; break;
    case '÷': computation = pre / current; break;
    default: break;
  }

  return computation.toString();
}

function App(){

  // useReducer receives 2 params, reducer (function for custom logic) && initial state (object)
  // it returns current state (object{}) and a dispatch method
  const [state, dispatch] = useReducer(reducer, {});
  const {currentOperand, previousOperand, operation} = state;

  return (
    <div className='calculator-grid'>
      <div className="output">
          <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
          <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      
      <button className="span-two" onClick={()=>{dispatch({type:ACTIONS.CLEAR})}}>AC</button>
      <button onClick={()=>{dispatch({type:ACTIONS.DEL_DIGIT})}}>DEL</button>
      <OperationButton operation='÷' dispatch={dispatch}>÷</OperationButton>
      
      <DigitButton dispatch={dispatch} digit='1'>1</DigitButton>
      <DigitButton dispatch={dispatch} digit='2'>2</DigitButton>
      <DigitButton dispatch={dispatch} digit='3'>3</DigitButton>
      <OperationButton operation='*' dispatch={dispatch}>*</OperationButton>

      <DigitButton dispatch={dispatch} digit='4'>4</DigitButton>
      <DigitButton dispatch={dispatch} digit='5'>5</DigitButton>
      <DigitButton dispatch={dispatch} digit='6'>6</DigitButton>
      <OperationButton operation='+' dispatch={dispatch}>+</OperationButton>

      <DigitButton dispatch={dispatch} digit='7'>7</DigitButton>
      <DigitButton dispatch={dispatch} digit='8'>8</DigitButton>
      <DigitButton dispatch={dispatch} digit='9'>9</DigitButton>
      <OperationButton operation='-' dispatch={dispatch}>-</OperationButton>

      <DigitButton digit='.' dispatch={dispatch}>.</DigitButton>

      <DigitButton dispatch={dispatch} digit='0'>0</DigitButton>
      <button className="span-two" onClick={()=>{dispatch({type:ACTIONS.EVALUATE})}} >=</button>
    </div>
  )
}

export default App;
