import './App.css';
import SignIn from './components/SignIn';
import Wellcome from './components/Wellcome';

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Wellcome name="Martin"/>
        <SignIn/>
      </div>
      
    </div>
  );
}

export default App;
