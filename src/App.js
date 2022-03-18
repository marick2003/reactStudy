import logo from './logo.svg';
import './App.css';
import './sass/style.scss';
import Menu from './component/menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Menu/>
      </header>
       
    </div>
  );
}

export default App;
