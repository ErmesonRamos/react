import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

    const nome = 'Eduardo';

  return (
    <div className="App">
      <SayMyName nome="Ermeson"/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Ermeson" idade="17" profissao="Programador" foto="https//via.placeholder.com/150"/>
      
    </div>
  );
}

export default App;
