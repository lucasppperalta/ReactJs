import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter';
import Header from './header/Header';
import Work from './works/Work'
function App() {
  return (
    <div className="App">
      {/*Cambia el estado del componente*/}
      <Header title="Header"/>
      <Counter />
      <Work />
    </div>
    
  );
}

export default App;
