import Evento from "./components/Evento";
import Form from "./components/Form";
function App() {
  return (
    <div>
      <h1>Testando Eventos</h1>
      <Evento numero="1" />
      <br/>
      <Evento numero= "7" />
      <Form />
    </div>
  );
}

export default App;
