import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {

    const nome = 'Eduardo';

  return (
    <div className="App">
      <h1>Testando o Estilo</h1>
      <SayMyName nome="Ermeson"/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Ermeson" idade="17" profissao="Programador" foto="https//via.placeholder.com/150"/>
      <Frase/>
    </div>
  );
}

export default App;
