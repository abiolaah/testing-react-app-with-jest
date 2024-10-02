import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h1 id='header'>Testing React App</h1>
      <Counter initialCount={0}/>
    </div>
  );
}

export default App;
