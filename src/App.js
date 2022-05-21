import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { increment,decrement,incrementByAmount } from './redux/Mathreducer';

function App() {
  const count=useSelector(state=>state.mathreducer.count);
  console.log("counter",count);
  const dispatch=useDispatch();

  
  const onHandleIncrement=()=>{
    const action=increment();
    dispatch(action)
  }
  const onHandleDecrement=()=>{
    const action=decrement();
    dispatch(action);
  }
  const onHandleIncrementByAmount=()=>{
    const action=incrementByAmount(5);
    dispatch(action);
  }
  return (
    <div className="App">
      Counter:{count}
      <button onClick={onHandleIncrement}>increment</button>
      <button onClick={onHandleDecrement}>decrement</button>
      <button onClick={onHandleIncrementByAmount}>incrementByAmount</button>
    </div>
  );
}

export default App;
