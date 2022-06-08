import {useState, useEffect} from 'react';
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // alert('Reloaded')
    // setCounter(100);
    alert("You've changed the counter to " + counter)
  },[counter]);

  return (
    <div className="App">
        <button onClick={() => setCounter( (prevCount) => prevCount - 1 )}> - </button>
        {/* <button onClick={()=>alert('Minus Button Clikcked')}> - </button> */}
        
        <h1>{counter}</h1>
        
        {/* <button onClick={()=>alert('Plus Button Clikcked')}> + </button> */}
        <button onClick={() =>setCounter( (prevCount) => prevCount + 1 )}> + </button>


    </div>
  );
}

export default App;
