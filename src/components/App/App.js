import logo from '../../assets/images/logo.svg';
import Test from '../test/test';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
      </header>
    </div>
  );
}

export default App;
