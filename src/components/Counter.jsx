import { useDispatch, useSelector } from 'react-redux'

import {addCount} from '../Redux/Counter/action'
import '../styles/ProductDetails.css'


export const Counter= ()=> {
     
const dispatch = useDispatch();
const counter = useSelector((store) => 
 store.counter
)
  return (
    <div className='counter'>
        <button  onClick={()=>{
    dispatch(addCount(-1))
  }}>-</button>
  <div className='number'>
  {counter} 
  </div>

  <button onClick={()=>{
    dispatch(addCount(1))
  }}>
    +
  </button>
    </div>
  )
}