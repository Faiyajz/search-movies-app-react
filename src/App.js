import './App.css';

const App = () => {
  const name = "Faiyaj Zaman";
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>hello {isNameShowing ? "Faiyaj True" : name}</h1>
      {name ? (
      <>{name}</>
      ): (
        <>
          <h1>test</h1>
          <h1>test </h1>
        </>
      
      )}
    </div>
  );
}

export default App;
