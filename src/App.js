import {useState} from 'react';
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0);

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
