import logo from './logo.svg';
import './App.css';
import NameForm from './components/pages/CVForm'
function App() {
  return (
    <div className="App ">


      <p className="text-monospace h1 text-center App-background text-white">SmartCL</p>
      <p class="text-monospace text-center">Welcome to Smart Cover Letter Generator</p>



      <NameForm />
    </div>
  );
}

export default App;
